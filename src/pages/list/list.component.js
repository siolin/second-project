export const list = {
  template: require('./list.html'),
  bindings: {
    info: '<'
  },
  controller() {
    this.show = false;
    this.showDiagram = () => {
      this.show = true;
    };
  }
};
