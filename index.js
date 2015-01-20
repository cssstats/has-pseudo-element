'use strict';

module.exports = function hasPseudoElement(selector) {
  if (typeof selector != 'string') {
    throw new TypeError('has-pseudo-element expects a string');
  }

  return true;
}
