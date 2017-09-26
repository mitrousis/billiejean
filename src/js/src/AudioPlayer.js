const Howler = require('howler')


class AudioPlayer {

  constructor() {
    this.currSoundIndex = -1
    this.sounds = [
      {
        id: 'chord1', 
        path: './media/chord_1.m4a'
      },
      {
        id: 'chord2', 
        path: './media/chord_2.m4a'
      },
      {
        id: 'chord3', 
        path: './media/chord_3.m4a'
      },
      {
        id: 'chord4', 
        path: './media/chord_4.m4a'
      }
    ]
      
    this.preloadSounds()
  }
  preloadSounds(){
    // Not really checking if they're loaded yet
    this.sounds.forEach((sound) => {
      sound.howl = new Howl({
        src: sound.path
      }) 
    })

    
    // Clear listener after first call.
    /*sound.once('load', function(){
      sound.play();
    })*/
   

  }

  playNextSound(){
    this.currSoundIndex++
    this.currSoundIndex %= this.sounds.length

    this.sounds[this.currSoundIndex].howl.play()
    
  }

  playSoundById(id){
    let howl = this.sounds.filter((sound) => {
      if(sound.id == id){
        return sound.howl
      }
    })

    howl.play()
  }
}

module.exports = AudioPlayer