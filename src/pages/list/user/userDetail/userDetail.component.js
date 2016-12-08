export const userDetail = {
  bindings: {
    user: '<',
    show: '<',
    index: '<'
  },
  template: require('./userDetail.html'),
  controller($location) {
    this.genderLink = $location.host();
    this.$postLink = () => {
      if (this.index === 0 || this.index % 2 === 0) {
        this.class = 'odd';
      }
    };
  }
};
