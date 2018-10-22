const { adjustWorkbox, override } = require("customize-cra")
const workboxConfigInject = require("./config-workbox")

module.exports = override(adjustWorkbox(workboxConfigInject))