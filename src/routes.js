export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/list');

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
          return Restangular.oneUrl('api', 'https://randomuser.me/api').get({results: 12}).then(data => data.results);
        }
      }
    });
}
