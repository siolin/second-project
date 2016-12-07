import angular from 'angular';

import {hello} from './app/hello';
import {list} from './pages/list/list.component';
import {header} from './pages/list/header/header.component';
import {user} from './pages/list/user/user.component';
import {userDetail} from './pages/list/user/userDetail/userDetail.component';

import 'angular-ui-router';
import 'angular-resource';
import 'highcharts-ng';
import 'lodash';
import 'restangular';
import 'angular-animate';

import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router', 'restangular', 'highcharts-ng', 'ngAnimate'])
  .config(routesConfig)
  .component('app', hello)
  .component('list', list)
  .component('header', header)
  .component('user', user)
  .component('userDetail', userDetail);
