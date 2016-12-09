import List from './list.controller';

export const list = {
  template: require('./list.html'),
  bindings: {
    info: '<'
  },
  controller: List
};
