import React from 'react';
import PropTypes from 'prop-types';
import { MainElem } from './animation';
import styler from 'stylefire';
import { distance } from '@popmotion/popcorn';
import { listen, transform, value, pointer, spring, physics } from 'popmotion';

const { conditional, transformMap, linearSpring } = transform;
const DEFAULT_STATE = { x: 0, y: 0 };

// helper func
function getMeasurement(domRef) {
  return domRef.getBoundingClientRect();
}
function getCenterCoordinate(measurement) {
  return { x: measurement.x + measurement.width / 2, y: measurement.y + measurement.height / 2 };
}

const applyEventHook = (onActivate, onDeactivate, currentStatusRegistry, data) => predicate => val => {
  if (predicate(val) !== currentStatusRegistry.isIn) {
    if (currentStatusRegistry.isIn) {
      if (onDeactivate && currentStatusRegistry.lockedInIndex === data) onDeactivate();
    } else {
      if (onActivate && currentStatusRegistry.lockedInIndex === null) onActivate(data);
    }
  }
};

const isInRangeGen = (target, range) => coordinate => distance(target, coordinate) < range;

const elasticMagnet = (target, strength, range) =>
  conditional(
    isInRangeGen(target, range),
    transformMap({
      x: linearSpring(strength, target.x),
      y: linearSpring(strength, target.y),
    }),
  );

const springTo = ({ velocity, origin, ...rest }) =>
  physics({
    velocity,
    friction: 0.9,
    springStrength: 300,
    restSpeed: false,
    from: origin,
    ...rest,
  });

/*
    If the ball coordinate enter the range of a hook point
      it will be snapped to that point
      onActivate event handler will be fired
      onActivate event handler will receive the index of that point in the original array
    
    If the ball coordinate exit the range of a hookpoint
      it will be drag from the center
      onDeactivate event will be fired
    
    What will happen if it is in the range of multiple point?
      => Point should not overlap
  */

export default class MainButton extends React.Component {
  motionTracker = null;
  instanceRef = null;
  pointerMotionRef = null;
  physicMotionRef = null;

  state = {
    lockedInIndex: null,
    isIn: false,
  };

  createRef = ins => {
    this.instanceRef = ins;
  };

  componentDidMount() {
    if (this.instanceRef) {
      const stylerRef = styler(this.instanceRef);

      this.motionTracker = value(DEFAULT_STATE, data => {
        stylerRef.set(data);
      });

      listen(this.instanceRef, 'touchstart mousedown').start(this.onPointerStart);
      listen(document, 'touchend mouseup').start(this.onPointerStop);
    }
  }

  onActivate = data => {
    this.setState(
      {
        isIn: true,
        lockedInIndex: data,
      },
      () => {
        this.adjustAttraction('high');
        this.props.onSnapIn(data);
      },
    );
  };
  onDeactivate = data => {
    this.setState(
      {
        isIn: false,
        lockedInIndex: null,
      },
      () => {
        this.adjustAttraction();
        this.props.onSnapOut(data);
      },
    );
  };

  adjustAttraction = profile => {
    const HIGH_STRENGTH_STIFFNESS = 500;
    const NORMAL_STRENGTH_STIFFNESS = 300;

    if (!this.physicMotionRef) {
      return console.error('There is no physic motion reference!');
    }
    if (profile === 'high') {
      this.physicMotionRef.setSpringStrength(HIGH_STRENGTH_STIFFNESS);
    } else {
      this.physicMotionRef.setSpringStrength(NORMAL_STRENGTH_STIFFNESS);
    }
  };
  onPointerStart = e => {
    e.preventDefault();
    if (this.pointerMotionRef) {
      this.pointerMotionRef.stop();
    }
    this.props.onSelect();

    const POINT_TRACK_RANGE = this.props.trackRange;
    const magnetTransformerForTargets = this.props.hookCoordinates.map(hook =>
      elasticMagnet(hook, 0.3, POINT_TRACK_RANGE),
    );

    const magnetTransfomerForSource = elasticMagnet({ x: 0, y: 0 }, 0.7, 1000);

    const sniffInRanges = this.props.hookCoordinates.map((point, index) => data => {
      applyEventHook(this.onActivate, this.onDeactivate, this.state, index)(isInRangeGen(point, POINT_TRACK_RANGE))(
        data,
      );
      return data;
    });
    // set things in motion
    this.physicMotionRef = springTo({
      origin: this.motionTracker.get(),
      velocity: this.motionTracker.getVelocity(),
    }).start(this.motionTracker);

    this.pointerMotionRef = pointer(this.motionTracker.get())
      .pipe(
        magnetTransfomerForSource,
        ...magnetTransformerForTargets,
        ...sniffInRanges,
      )
      .start(v => {
        if (this.physicMotionRef) this.physicMotionRef.setSpringTarget(v);
      });
  };

  onPointerStop = e => {
    e.preventDefault();
    if (this.pointerMotionRef) this.pointerMotionRef.stop();
    this.props.onRelease();

    spring({
      from: this.motionTracker.get(),
      to: this.props.hookCoordinates[this.state.lockedInIndex] || DEFAULT_STATE,
      stiffness: 500,
      damping: 10,
      velocity: this.motionTracker.getVelocity(),
    }).start(this.motionTracker);
  };
  render() {
    const { className, children } = this.props;
    return (
      <div ref={this.createRef}>
        <MainElem className={className} pose={this.state.isIn ? 'snapped' : 'normal'}>
          {children}
        </MainElem>
      </div>
    );
  }

  componentWillUnmount() {
    try {
      this.motionTracker.stop();
      this.pointerMotionRef.stop();
    } catch (e) {
      console.error(e);
    }
  }
}

MainButton.defaultProps = {
  hookCoordinates: [{ x: 0, y: 0 }],
  trackRange: 72,
  onSnapIn: e => {},
  onSnapOut: e => {},
  onSelect: e => {},
  onRelease: e => {},
};

MainButton.propTypes = {
  hookCoordinates: PropTypes.array,
  trackRange: PropTypes.number,
  className: PropTypes.string,
  onSnapIn: PropTypes.func,
  onSnapOut: PropTypes.func,
  onSelect: PropTypes.func,
  onRelease: PropTypes.func,
};
