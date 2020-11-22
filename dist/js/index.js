const BreathCirclesTwo = () => {
  const el = document.querySelector('#breath-circles-two [data-inhale]')

  let currentText = 'exhale'

  setInterval(() => {
    el.textContent = currentText

    currentText = currentText === 'inhale' ? 'exhale' : 'inhale'
  }, 6000)
}

BreathCirclesTwo()
