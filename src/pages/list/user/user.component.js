export const user = {
  bindings: {
    users: '<'
  },
  template: require('./user.html'),
  controller($log, $scope) {
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
        this.lastIndex = index;
      }
    };
    this.calculatePosition = (event, index) => {
      const indexValue = index;
      const wrapper = event.target.offsetParent;
      const userInfo = event.target.offsetParent.children[0];
      wrapper.addEventListener('transitionend', () => {
        if (this.showedList[indexValue] === 'show-detail') {
          this.show = true;
          $scope.$digest();
        }
      });
      const height = userInfo.offsetHeight * ++index;
      const position = {
        position: 'absolute',
        top: `${height + userInfo.offsetHeight}px`,
        left: `${wrapper.offsetLeft}px`,
        width: `${userInfo.offsetWidth}px`
      };
      this.styles = position;
    };
    this.$onInit = () => {
      this.showedList = {};
    };
  }
};
