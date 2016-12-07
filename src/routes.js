export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('list', {
      url: '/list',
      component: 'list',
      resolve: {
        info: Restangular => {
          return Restangular.oneUrl('users', 'https://randomuser.me/');
        }
      }
    });
}
