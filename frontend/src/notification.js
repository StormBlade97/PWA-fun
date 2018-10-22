function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function notificationBootstrap() {
  if (!Notification) {
    console.error('There is no Notification object');
    return;
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      console.log(registration);
      registration.pushManager.getSubscription().then(sub => {
        if (sub === null) {
          console.log('Not subscripted to push service!! ');
          console.log('Requesting notification permission');

          Notification.requestPermission(function(status) {
            console.log('Notification permission status:', status);
            subscribeUser();
          });
          // for push notification
          // update UI and ask for user interest in receiving notification
        } else {
          console.log('There is a push API subscription object ative: ', JSON.stringify(sub));
          // sync this with the server
        }
      });
    });
  }
}

function subscribeUser() {
  if ('serviceWorker' in navigator && Notification) {
    navigator.serviceWorker.ready.then(reg => {
      const applicationServerKey = urlBase64ToUint8Array(
        `BLjf-sCAQtasDXcuoWX3KrqFgeWCjGSS8LLfIzyl9uxE1166Cy6-wbo7vwmjPLfOGp5rD9SA66zjhym_0kvQ1lY`,
      );
      // HUYjB4z6P6mWKiYAn89FFwocyJC3rQg8xnRu1ZUSrKc  ---> private key
      reg.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey,
        })
        .then(sub => {
          console.log('Endpoint URL: ', sub.endpoint);
        })
        .catch(error => {
          if (Notification.permission === 'denied') {
            console.warn('Permission for notification was denied while attempting to subscribe to Push API');
          } else {
            console.error('Unable to subscribe to PUSH', error);
          }
        });
    });
  }
}

export function displayNotification({ title, body }) {
  if (Notification && Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      reg.showNotification(title, {
        body,
        icon: process.env.PUBLIC_URL + `/icon-192.png`,
        vibrate: [100, 50, 100],
        date: {
          dateOfArrive: Date.now(),
          primaryKey: 1,
        },
      });
    });
  }
}

export default notificationBootstrap;
