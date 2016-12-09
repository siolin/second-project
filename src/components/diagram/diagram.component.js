import Diagram from './diagram.controller';

export const diagram = {
  bindings: {
    info: '<',
    show: '='
  },
  template: require('./diagram.html'),
  controller: Diagram
};
