export const diagram = {
  bindings: {
    info: '<',
    show: '='
  },
  template: require('./diagram.html'),
  controller($log) {
    $log.log(this);
    this.closeDiagram = () => {
      this.show = false;
    };
    this.male = 0;
    this.female = 0;
    for (const prop in this.info) {
      if (this.info[prop].gender === 'female') {
        this.female += 1;
      } else if (this.info[prop].gender === 'male') {
        this.male += 1;
      }
    }
    this.labels = ["Male", "Female"];
    this.data = [this.male, this.female];
    this.colors = ['#434348', '#7cb5ec'];
    this.options = {
      animation: {
        animateRotate: true,
        animateScale: true
      }
    };
  }
};
