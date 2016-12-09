import angular from 'angular';

import {hello} from './app/hello';
import {list} from './pages/list/list.component';
import {listHeader} from './pages/list/listHeader/listHeader.component';
import {user} from './pages/list/user/user.component';
import {userDetail} from './pages/list/user/userDetail/userDetail.component';
import {diagram} from './components/diagram/diagram.component';

import 'angular-ui-router';
import 'angular-resource';
import 'lodash';
import 'restangular';
import 'angular-chart.js';

import routesConfig from './routes';

import './index.scss';
angular
  .module('app', ['ui.router', 'restangular', 'chart.js'])
  .config(routesConfig)
  .component('app', hello)
  .component('diagram', diagram)
  .component('list', list)
  .component('listHeader', listHeader)
  .component('user', user)
  .component('userDetail', userDetail);
