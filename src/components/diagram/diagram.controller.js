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
    this.labels = ["Male", "Female"];
    this.data = [this.male, this.female];
    this.colors = ['#1653E8', '#E81AD7'];
  }

  closeDiagram() {
    this.show = false;
  }

}
