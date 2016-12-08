export const user = {
  bindings: {
    users: '<'
  },
  template: require('./user.html'),
  controller($log) {
    this.clicked = index => {
      this.showedList[index] = 'show-detail';
      this.index = index;
      this.user = this.users[index];
      this.show = false;
    };
    this.resetShowedList = () => {
      for (let i = 0; i < this.users.length; i++) {
        this.showedList[i] = '';
      }
    };
    this.showDetail = (index, event) => {
      this.resetShowedList();
      this.clicked(index);
      this.calculatePosition(event, index);

      if (this.lastIndex === index) {
        this.showedList[index] = '';
        this.lastIndex = null;
      } else {
        // $timeout(() => {
        //   this.show = true;
        // }, 400);
        this.lastIndex = index;
      }
    };
    this.calculatePosition = (event, index) => {
      const string = /user-info/;
      this.findUserInfo = () => {
        for (const key in event.path) {
          if (string.test(event.path[key].className)) {
            return angular.element(event.path[key]);
          }
        }
      };
      const userInfo = this.findUserInfo();
      const wrapper = userInfo.parent();
      wrapper[0].addEventListener('transitionend', () => {
        if (!this.users[index].show) {
          this.show = true;
          $log.log(this.users[index]);
        }
      });
      const height = userInfo[0].offsetHeight * ++index;
      const position = {
        position: 'absolute',
        top: `${height + userInfo[0].offsetHeight}px`,
        left: `${wrapper[0].offsetLeft}px`,
        width: `${userInfo[0].offsetWidth}px`
      };
      this.styles = position;
    };
    this.$onInit = () => {
      this.showedList = {};
      this.resetShowedList();
    };
  }
};
