export default class List {

  constructor($log, $compile) {
    'ngInject';
    this.show = false;
    this.$log = $log;
    this.$compile = $compile;

    this.male = 0;
    this.female = 0;
    for (const prop in this.info) {
      if (this.info[prop].gender === 'female') {
        this.female += 1;
      } else if (this.info[prop].gender === 'male') {
        this.male += 1;
      }
    }
    this.malePercent = ((this.male / this.info.length) * 100).toPrecision(3);
    this.femalePercent = ((this.female / this.info.length) * 100).toPrecision(3);
  }
}
