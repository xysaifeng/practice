// Add this:
var _wr = function(type) {
    var orig = history[type];
    return function() {
      var rv = orig.apply(this, arguments);
      var e = new Event(type);
      e.arguments = arguments;
      window.dispatchEvent(e);
      return rv;
    };
  };
  history.pushState = _wr('pushState');
  history.replaceState = _wr('replaceState');
  
  // Use it like this:
  window.addEventListener('pushState', function(e) {
    console.warn('THEY DID IT AGAIN!');
  });
  window.addEventListener('replaceState', function(e) {
    console.warn('THEY DID IT AGAIN!');
  });