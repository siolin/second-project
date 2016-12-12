const modalTemplate = require('./modal.html');
const buttonTemplate = require('./modalButton.html');

export function modal($compile) {
  return {
    scope: {
      male: '=',
      female: '='
    },
    restrict: 'E',
    template: buttonTemplate,
    link(scope, elem) {
      scope.options = {
        chart: {
          type: 'pieChart',
          height: 300,
          x(d) {
            return d.key;
          },
          y(d) {
            return d.y;
          },
          color(d) {
            return (d && d.color);
          },
          showLabels: false,
          duration: 500,
          labelThreshold: 0.01,
          labelSunbeamLayout: true,
          legend: {
            margin: {
              top: 5,
              right: -5,
              bottom: 5,
              left: 5
            }
          }
        }
      };
      scope.data = [
        {
          key: `Male ${scope.male}%`,
          y: scope.male,
          color: '#99bbff'
        },
        {
          key: `Female ${scope.female}%`,
          y: scope.female,
          color: '#ff99ff'
        }
      ];

      const button = elem.find('button');

      button.on('click', () => {
        const modal = $compile(modalTemplate)(scope);
        elem.append(modal);
        const closeButton = angular.element(modal).children()[1];
        angular.element(closeButton).on('click', () => {
          angular.element(modal).remove();
        });

        scope.$digest();
      });
    }
  };
}
