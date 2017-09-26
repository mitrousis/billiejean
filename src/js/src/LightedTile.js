const TweenMax  = require('gsap/TweenMax')
//import TileImage from '../images/tile_01.jpg'

class LightedTile {

  constructor(col, row, size){
    let $tileDiv = $('<div/>')
    let x = col * size
    let y = row * size

    $tileDiv.addClass('lightedTile')
    $tileDiv.css('left', `${x}px`)
    $tileDiv.css('top', `${y}px`)
    $tileDiv.css('width', `${size}px`)
    $tileDiv.css('height', `${size}px`)
    $tileDiv.css('opacity', 0)

    $('body').append($tileDiv)

    this.tile = $tileDiv[0]
    this.tween = TweenMax.to(this.tile, .2, {
      'opacity' : 1,
      paused: true,
      ease: 'Linear.easeNone'
    })

  }
  
  reveal() {
    this.tween.play()

    window.Application.audioPlayer.playNextSound()
  }

  hide() {
    this.tween.reverse()
  }
}

module.exports = LightedTile