export const user = {
  bindings: {
    users: '<'
  },
  template: require('./user.html'),
  controller() {
    this.showDetail = index => {
      this.users.map(elem => {
        elem.show = false;
        return elem;
      });
      if (this.lastIndex === index) {
        this.users[index].show = false;
        this.lastIndex = null;
      } else {
        this.users[index].show = true;
        this.lastIndex = index;
      }
    };
  }
};
