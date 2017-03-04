'use strict';

exports.place = function(id1, id2) {
  var allChars = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '9',
    '0'];

  var id = [];

  for (var i = 0; i < id1.length; i++) {
    if (allChars.indexOf(id1.charAt(i)) == allChars.indexOf(id2.charAt(i))) {
      continue;
    } else if (allChars.indexOf(id1.charAt(i)) > allChars.indexOf(id2.charAt(i))) {
      id[0] = id1;
      id[1] = id2;
      break;
    } else {
      id[0] = id2;
      id[1] = id1;
      break;
    }
  }

  return id;

}
