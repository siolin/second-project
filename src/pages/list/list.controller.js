export default class List {

  constructor($log, $compile) {
    'ngInject';
    this.show = false;
    this.$log = $log;
    this.$compile = $compile;
  }

  showDiagram() {
    this.show = true;
    // const modal = this.$compile('<modal>')(this);
    // this.$log.log(modal);
    // angular.element(this).append(modal);
  }

}
