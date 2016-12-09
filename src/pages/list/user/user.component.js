import User from './user.controller';

export const user = {
  bindings: {
    users: '<'
  },
  template: require('./user.html'),
  controller: User
};
