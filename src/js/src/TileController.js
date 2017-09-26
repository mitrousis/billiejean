const LightedTile = require('./LightedTile')

class TileController {

  constructor(tileSize = 20){

    this.tileSize    = tileSize
    this.activeTiles = {}

    $('html').on('mousedown', (event) => {
      this.triggerTile(event.pageX, event.pageY, true)
    })

    $('html').on('mouseup', (event) => {
      this.triggerTile(event.pageX, event.pageY, false)
    })

  }

  triggerTile(x, y, reveal) {

    let col = Math.floor(x / this.tileSize)
    let row = Math.floor(y / this.tileSize)
    let hash = col.toString() + row

    if(this.activeTiles[hash] === undefined){
      this.activeTiles[hash] = new LightedTile(col, row, this.tileSize)
    }
    
    let tile = this.activeTiles[hash]

    if(reveal){
      tile.reveal()
    } else {
      tile.hide()
    }
    

  }
}

module.exports = TileController