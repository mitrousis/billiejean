class LightedTile {

  constructor(x, y, size){
    let $tileDiv = $('<div/>')

    $tileDiv.addClass('lightedTile')

    $tileDiv.css('left', `${x}px`)
    $tileDiv.css('top', `${y}px`)
    $tileDiv.css('width', `${size}px`)
    $tileDiv.css('height', `${size}px`)

    $('body').append($tileDiv)
  }
  
}

module.exports = LightedTile