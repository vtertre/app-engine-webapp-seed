'use strict';

module.exports = object => {
  object.listeners = {};

  object.on = (event, callback) => {
    object.listeners[event] = callback;
  };

  object.$on = object.on;

  object.emit = (event, args) => {
    object.listeners[event].apply(null, args);
  };

  return object;
};
