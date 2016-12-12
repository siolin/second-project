import angular from 'angular';

import {hello} from './app/hello';
import {list} from './pages/list/list.component';
import {listHeader} from './pages/list/listHeader/listHeader.component';
import {user} from './pages/list/user/user.component';
import {userDetail} from './pages/list/user/userDetail/userDetail.component';
import {diagram} from './components/diagram/diagram.component';
// import {modal} from './directives/modal/modal.directive';

import 'angular-ui-router';
import 'angular-resource';
import 'lodash';
import 'restangular';
import 'angular-chart.js';
import 'angular-nvd3';

import routesConfig from './routes';

import './index.scss';
angular
  .module('app', ['ui.router', 'restangular', 'nvd3'])
  .config(routesConfig)
  // .directive('modal', modal)
  .component('app', hello)
  .component('diagram', diagram)
  .component('list', list)
  .component('listHeader', listHeader)
  .component('user', user)
  .component('userDetail', userDetail);
