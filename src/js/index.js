const $ = require('jquery')
const LightedTile = require('./src/LightedTile')

require('../css/reset.css')
require('../css/main.css')

$(document).ready(() => {
  let lt = new LightedTile(100, 100, 20)
})

