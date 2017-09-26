const $ = require('jquery')
const TileController = require('./src/TileController')
const AudioPlayer    = require('./src/AudioPlayer')

require('../css/reset.css')
require('../css/main.css')

$(document).ready(() => {

  let tc = new TileController()

  window.Application = {}
  window.Application.audioPlayer = new AudioPlayer()
})



