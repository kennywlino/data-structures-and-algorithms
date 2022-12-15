const Stack = require('./stack.js');

function validateBrackets(str) {
  let tempStack = new Stack();

  // filters anything that's not a bracket out
  let regex = /[()\[\]{}]/g;

  let filteredStr = '';
  let filtered = str.match(regex);
  if (filtered) {
    filteredStr = filtered.join('');
  } else {
    return false;
  }

  let brackets = {
    '[': ']',
    '(': ')',
    '{': '}'
  };

  let openBrackets = Object.keys(brackets);
  let closeBrackets = Object.values(brackets);

  for (let i = 0; i < filteredStr.length; i++) {

    // if it's an open bracket push into the stack
    if (openBrackets.includes(filteredStr[i])) {
      tempStack.push(filteredStr[i]);
    }

    // if it's a close bracket check the top of the stack
    if (closeBrackets.includes(filteredStr[i])) {
      if (!tempStack.isEmpty()) {
        // bracket at top of stack
        let topOpenBracket = tempStack.peek().value;
        // close bracket === close bracket
        if (brackets[topOpenBracket] === filteredStr[i]) {
          tempStack.pop();
        }
      } else {
        return false;
      }
    }
  }
  return tempStack.isEmpty();
}

module.exports = validateBrackets;
