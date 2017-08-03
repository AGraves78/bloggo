const controller = require('./home.controller');
const template = require('./home.html');


const component = {
  controller,
  template,
  bindings: {
    posts: '<'
  }
}

module.exports = component;
