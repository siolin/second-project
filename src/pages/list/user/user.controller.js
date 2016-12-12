export default class User {

  constructor($log, $scope) {
    'ngInject';
    this.showedList = {};
    this.$log = $log;
    this.$scope = $scope;
  }

  clicked(index) {
    this.showedList[index] = 'show-detail';
    this.index = index;
    this.user = this.users[index];
    this.show = false;
  }

  resetShowedList() {
    for (let i = 0; i < this.users.length; i++) {
      this.showedList[i] = '';
    }
  }

  showDetail(index, event) {
    this.resetShowedList();
    this.clicked(index);
    this.calculatePosition(event, index);

    if (this.lastIndex === index) {
      this.showedList[index] = '';
      this.lastIndex = null;
    } else {
      this.lastIndex = index;
    }
  }

  calculatePosition(event, index) {
    const indexValue = index;
    const wrapper = event.target.offsetParent;
    const userInfo = event.target.offsetParent.children[0];
    wrapper.addEventListener('transitionend', () => {
      if (this.showedList[indexValue] === 'show-detail') {
        this.show = true;
        this.$scope.$digest();
      }
    });
    const height = userInfo.offsetHeight * ++index;
    const position = {
      position: 'absolute',
      top: `${height + wrapper.parentNode.offsetTop}px`,
      left: `${wrapper.offsetLeft}px`,
      width: `${userInfo.offsetWidth}px`
    };
    this.styles = position;
  }
}
