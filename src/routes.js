export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'list',
      resolve: {
        info: Restangular => {
          return Restangular.oneUrl('api', 'https://randomuser.me/api').get({results: 12}).then(data => data.results);
        }
      }
    });
}
