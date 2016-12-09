export const userDetail = {
  bindings: {
    user: '<',
    show: '<',
    even: '<'
  },
  template: require('./userDetail.html'),
  controller() {
    // this.genderLink = $location.host();
  }
};
