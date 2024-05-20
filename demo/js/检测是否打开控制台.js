



// Prevent Right Click (Optional)
document.addEventListener(
  'contextmenu',
  function (event) {
    event.preventDefault()
  },
  true
)

// DevTools Opened Script
function DevToolsOpened() {
  console.log('----op')
  alert('Developer Tools Opened')
}

// Detect DevTools (Chrome/Edge)
// https://stackoverflow.com/a/67148898/9498503 (SeongJun)
var devtools = function () { }
devtools.toString = function () {
  console.log(4)
  DevToolsOpened()
  return '-'
}

// setInterval(() => {
//   console.profile(devtools)
//   console.profileEnd(devtools)
//   if (console.clear) {
//     console.log('---cc')
//     // console.clear()
//   }
// }, 10000)

// Detect DevTools (FireFox)
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
  // Detect Resize (Chrome/Firefox/Edge Works) but (Triggers on Zoom In Chrome and Zoom Out FireFox)
  window.onresize = function () {
    if (window.outerHeight - window.innerHeight > 100 || window.outerWidth - window.innerWidth > 100) {
      console.log(3)
      DevToolsOpened()
    }
  }
}

// Detect Fire Bug
if ((window.console && window.console.firebug) || console.assert(1) === '_firebugIgnore') {
  console.log(2)
  DevToolsOpened()
}

// Detect Key Shortcuts
// https://stackoverflow.com/a/65135979/9498503 (hlorand)
window.addEventListener('keydown', function (e) {
  if (
    // CMD + Alt + I (Chrome, Firefox, Safari)
    (e.metaKey == true && e.altKey == true && e.keyCode == 73) ||
    // CMD + Alt + J (Chrome)
    (e.metaKey == true && e.altKey == true && e.keyCode == 74) ||
    // CMD + Alt + C (Chrome)
    (e.metaKey == true && e.altKey == true && e.keyCode == 67) ||
    // CMD + Shift + C (Chrome)
    (e.metaKey == true && e.shiftKey == true && e.keyCode == 67) ||
    // Ctrl + Shift + I (Chrome, Firefox, Safari, Edge)
    (e.ctrlKey == true && e.shiftKey == true && e.keyCode == 73) ||
    // Ctrl + Shift + J (Chrome, Edge)
    (e.ctrlKey == true && e.shiftKey == true && e.keyCode == 74) ||
    // Ctrl + Shift + C (Chrome, Edge)
    (e.ctrlKey == true && e.shiftKey == true && e.keyCode == 67) ||
    // F12 (Chome, Firefox, Edge)
    e.keyCode == 123 ||
    // CMD + Alt + U, Ctrl + U (View source: Chrome, Firefox, Safari, Edge)
    (e.metaKey == true && e.altKey == true && e.keyCode == 85) ||
    (e.ctrlKey == true && e.keyCode == 85)
  ) {
    console.log(1)
    DevToolsOpened()
  }
})