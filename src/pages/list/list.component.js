export const list = {
  template: require('./list.html'),
  bindings: {
    info: '<'
  },
  controller() {
    this.info.customGET('api', {results: '10'}).then(users => {
      this.users = users.results;
    });
  }
};
