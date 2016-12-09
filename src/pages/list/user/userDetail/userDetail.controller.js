export default class UserDetail {

  constructor($location) {
    'ngInject';
    this.genderLink = $location.host();
  }

}
