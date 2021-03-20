window.onload = function () {
  function playHello() {
    document.querySelector('.helloAudio').play()
  }
  document.querySelector('.helloButton').addEventListener('click', () => {
    playHello()
  })

  function playNewHello() {
    document.querySelector('.newHelloAudio').play()
  }
  document.querySelector('.newHelloButton').addEventListener('click', () => {
    playNewHello()
  })

  function playMoreHellos() {
    document.querySelector('.moreHellosAudio').play()
  }
  document.querySelector('.moreHellosButton').addEventListener('click', () => {
    playMoreHellos()
  })
}
