type dogList = dog[];
class doggy {
  doggies: dogList = [];
  static instance = new doggy();
  private constructor() {}
  addDog(dog: dog) {
    this.doggies.push(dog);
  }
}

doggy.instance;
// new doggy();
