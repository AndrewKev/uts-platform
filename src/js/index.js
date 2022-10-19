

let playMusic = () => {
  let play = document.getElementById('play')
  let pause = document.getElementById('pause')
  let audio = document.getElementById('audio')
  let img = document.getElementById('imgMusic')

  let hidden = 'hidden'

  if(pause.classList.contains(hidden)) {
    play.classList.add(hidden)
    pause.classList.remove(hidden)
    audio.play()
  } else {
    play.classList.remove(hidden)
    pause.classList.add(hidden)
    img.classList.add('animate-none')
    audio.pause()
  }
  
}