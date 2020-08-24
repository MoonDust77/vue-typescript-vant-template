const baseSize = 37.5

function setRem() {
  const clientWidth: number =
    document.documentElement.clientWidth > 375
      ? 375
      : document.documentElement.clientWidth
  const scale: number = clientWidth / 375
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}

setRem()

window.onresize = function() {
  setRem()
}
