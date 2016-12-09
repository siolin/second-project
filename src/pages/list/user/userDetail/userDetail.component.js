import UserDetail from './userDetail.controller';

export const userDetail = {
  bindings: {
    user: '<',
    show: '<',
    even: '<'
  },
  template: require('./userDetail.html'),
  controller: UserDetail
};
