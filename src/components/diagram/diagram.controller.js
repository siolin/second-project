export default class Diagram {

  constructor() {
    this.male = 0;
    this.female = 0;
    for (const prop in this.info) {
      if (this.info[prop].gender === 'female') {
        this.female += 1;
      } else if (this.info[prop].gender === 'male') {
        this.male += 1;
      }
    }
    this.malePercent = ((this.male / this.info.length) * 100).toPrecision(3);
    this.femalePercent = ((this.female / this.info.length) * 100).toPrecision(3);
    this.options = {
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
    this.data = [
      {
        key: `Male ${this.malePercent}%`,
        y: this.male,
        color: '#99bbff'
      },
      {
        key: `Female ${this.femalePercent}%`,
        y: this.female,
        color: '#ff99ff'
      }
    ];
  }

  closeDiagram() {
    this.show = false;
  }

}
