export const list = {
  template: require('./list.html'),
  bindings: {
    info: '<'
  },
  controller($log) {
    this.show = false;
    // $log.log(this);
    this.showDiagram = () => {
      $log.log(this);
      $log.log('clicked');
      this.show = true;
    };
  }
};
