// syntactic sugar
class Instructor {
  name;
  designation = "web course instructor";
  team = "web team";
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  startSupportSession(time) {
    console.log(`start the support session at ${time}`);
  }
}
const pial = new Instructor("pial", "Dhaka");
console.log(pial);
pial.startSupportSession("9.30 PM");

const sakib = new Instructor("sakib", "mirpur");
console.log(sakib);
pial.startSupportSession("9.30 PM");

// ....................................................................................
