function myFunction() 
{
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
$(document).bind('keyup', function (e) {
const keyCodes = {
  0: 'No Keycode',
  3: 'Break',
  8: 'Backspace',
  9: 'Tab',
  12: 'Clear',
  13: 'Enter',
  16: 'Shift',
  17: 'Ctrl',
  18: 'Alt',
  19: 'Pause',
  20: 'CAPS LOCK',
  27: 'ESCAPE',
  32: 'SPACE BAR',
  33: 'Page Up',
  34: 'Page Down',
  35: 'End',
  36: 'Home',
  37: 'Left Arrow',
  38: 'Up Arrow',
  39: 'Right Arrow',
  40: 'Down Arrow',
  41: 'Select',
  42: 'Print',
  43: 'Execute',
  44: 'Print Screen',
  45: 'Insert',
  46: 'Delete',
  47: 'Help',
  48: '0',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',
  58: ':',
  59: 'Semi colon',
  60: '<',
  61: 'Equals',
  65: 'A',
  66: 'B',
  67: 'C',
  68: 'D',
  69: 'E',
  70: 'F',
  71: 'G',
  72: 'H',
  73: 'I',
  74: 'J',
  75: 'K',
  76: 'L',
  77: 'M',
  78: 'N',
  79: 'O',
  80: 'P',
  81: 'Q',
  82: 'R',
  83: 'S',
  84: 'T',
  85: 'U',
  86: 'V',
  87: 'W',
  88: 'X',
  89: 'Y',
  90: 'Z',
  91: 'Windows Key / Left ⌘',
  92: 'Right Window Key',
  93: 'Windows Menu /Select Key',
  95: 'Sleep',
  96: 'Numpad 0',
  97: 'Numpad 1',
  98: 'Numpad 2',
  99: 'Numpad 3',
  100: 'Numpad 4',
  101: 'Numpad 5',
  102: 'Numpad 6',
  103: 'Numpad 7',
  104: 'Numpad 8',
  105: 'Numpad 9',
  106: 'Multiply',
  107: 'Add',
  108: 'Numpad Period',
  109: 'Subtract',
  110: 'Decimal Point',
  111: 'Divide',
  112: 'F1',
  113: 'F2',
  114: 'F3',
  115: 'F4',
  116: 'F5',
  117: 'F6',
  118: 'F7',
  119: 'F8',
  120: 'F9',
  121: 'F10',
  122: 'F11',
  123: 'F12',
  124: 'F13',
  125: 'F14',
  126: 'F15',
  127: 'F16',
  128: 'F17',
  129: 'F18',
  130: 'F19',
  131: 'F20',
  132: 'F21',
  133: 'F22',
  134: 'F23',
  135: 'F24',
  144: 'Num Lock',
  145: 'Scroll Lock',
  160: '^',
  161: '!',
  162: '؛',
  163: '#',
  164: '$',
  165: 'Ù',
  166: 'Page Backward',
  167: 'Page Forward',
  168: 'Refresh',
  169: 'Closing Paren',
  170: '*',
  171: '~ + * Key',
  172: 'Home Key',
  173: 'Minus(Firefox),Mute/Unmute',
  174: 'Decrease Volume Level',
  175: 'Increase Volume Level',
  176: 'Next',
  177: 'Previous',
  178: 'Stop',
  179: 'Play/Pause',
  180: 'E-Mail',
  181: 'Mute/Unmute',
  182: 'Decrease Volume Level',
  183: 'Increase Volume Level',
  186: 'Semi-Colon',
  187: 'Equal',
  188: 'Comma',
  189: 'Dash',
  190: 'Period',
  191: 'Forward Slash',
  192: 'Grave Accent',
  193: '?,/',
  194: 'Numpad Period (Chrome)',
  219: 'Open Bracket',
  220: 'Back Slash',
  221: 'Close Bracket',
  222: 'Single Quote',
  223: '`',
  224: 'Left Or Right ⌘ Key (Firefox)',
  225: 'Altgr',
};

document.getElementById('last').innerHTML = keyCodes[e.keyCode] ;
document.getElementById('keycode').innerHTML = e.keyCode ;
})

  
var FALSE_FUNCTION = new Function('return false')
var key_prefix = '#key'

$(document).bind('keyup', function (b) {
  var a = (b.keyCode ? b.keyCode : b.which)
  if (a == 186 || a == 59) { a = 'colon' }
  if (a == 187) { a = 61 }
  if (a == 182) {a = 174}
  if (a == 183) { a = 175 }
  if ($(key_prefix + a)) { key_highlight(a) }
  if ($(key_prefix + a + 'b')) { key_highlight(a + 'b') }
})
$(document).keydown(function(objEvent) {
    if ((objEvent.keyCode == 9)||(objEvent.keyCode == 18)||((objEvent.keyCode >= 112) && (objEvent.keyCode <= 123))) {  
        objEvent.preventDefault(); // stops its action
    }
})
 $(document).ready(function(){
 $(document).bind("contextmenu",function(e){
	  alert('right click disabled');
   return false;
 });
});
  
$(document).ready(function () {

  disableShortcuts();
  reset_keyboard();
  
})

		
function key_highlight (a) {
  key_clear(a); $(key_prefix + a).addClass('key_highlight')
  setTimeout("key_pressed('" + a + "')", 300) }

function key_pressed (a) {
  key_clear(a)
  if (a == 16 || a == 17 || a == 18 || a == 13 || a.match(/b$/)) { new_class = 'key_pressed_m' }
  else { new_class = 'key_pressed' }
  $(key_prefix + a).addClass(new_class)
}

function key_clear (a) { $(key_prefix + a).removeClass('key_un key_pressed key_pressed_m key_highlight') }

function reset_keyboard () {
  var a = $('.key_pressed')
  a.each(function (b, c) { c.className = 'key_un' })
}

function disableShortcuts () {
 document.onhelp = FALSE_FUNCTION; window.onhelp = FALSE_FUNCTION;
  shortcut.add("'", FALSE_FUNCTION)
}

shortcut =
  {
    all_shortcuts: {},
	
	add: function (b,  d) 
	{
		var g = { type: 'keydown', propagate: false, disable_in_input: false, target: document, keycode: false }
		if (!d) { d = g }else {
			for (var a in g) {
			if (typeof d[a] == 'undefined') { d[a] = g[a]}
			}
		}
		var f = d.target
		if (typeof d.target == 'string') { f = document.getElementById(d.target) }
		var c = this
		b = b.toLowerCase()
		var e = function (o) 
		{
							o = o || window.event
							
		}
		this.all_shortcuts[b] = { callback: e, event: d.type }
		}, 
	
	remove: function (a) {
      a = a.toLowerCase()
      var d = this.all_shortcuts[a]
      delete (this.all_shortcuts[a])
      if (!d) { return } var b = d.event
   
    }
}
