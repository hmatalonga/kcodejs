const kspecial = {
  32  : 'Spacebar',
  97  : 'Numpad 1',
  98  : 'Numpad 2',
  99  : 'Numpad 3',
  100 : 'Numpad 4',
  101 : 'Numpad 5',
  102 : 'Numpad 6',
  103 : 'Numpad 7',
  104 : 'Numpad 8',
  105 : 'Numpad 9'
}

const kcode = document.getElementById('key-code');
const kchar = document.getElementById('key-char');

window.addEventListener('keydown', function (event) {
  if (event.defaultPrevented) {
    return; // Should do nothing if the default action has been cancelled
  }

  var handled = false;

  if (event.keyCode !== undefined) {
    // Handle the event with KeyboardEvent.keyCode and set handled true.
    kcode.innerHTML = event.keyCode;
    handled = true;
  }

  if (event.key !== undefined) {
    // Handle the event with KeyboardEvent.key and set handled true.
    kchar.innerHTML = kspecial[event.keyCode] !== undefined ?
        kspecial[event.keyCode] : event.key;

    kchar.style.visibility = 'visible';
    handled = true;
  }

  if (handled) {
    // Suppress "double action" if event handled
    event.preventDefault();
  }
}, true);
