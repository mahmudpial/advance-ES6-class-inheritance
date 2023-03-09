// syntactic sugar
// parent class
class TeamMember {
  name;
  location;
  team = " web team";
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
}
// child class extends parent class
class Instructor extends TeamMember {
  designation = "web course instructor";
  constructor(name, location) {
    super(name, location);
  }
  startSupportSession(time) {
    console.log(`start the support session at ${time}`);
  }
}

class Devloper extends TeamMember {
  designation = "web course Instructor";
  Tech;
  constructor(name, location, Tech) {
    super(name, location);
    this.Tech = Tech;
  }
  DevloperFeature(feature) {
    console.log(`please devlop the ${feature}`);
  }
  release(version) {
    console.log(`please release the version ${version}`);
  }
}

class JobPlacement extends TeamMember {
  designation = "job placement comandos";
  region;
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }
  ProvideResume(feature) {
    console.log(`please devlop the ${feature}`);
  }
  preparestudent(version) {
    console.log(`please release the version ${version}`);
  }
}

const job = new JobPlacement("pial", "kolkhata", "India");
console.log(job);

const pial = new Instructor("pial", "Dhaka");
console.log(pial);
pial.startSupportSession("9.30 PM");

const sakib = new Instructor("sakib", "mirpur");
console.log(sakib);
pial.startSupportSession("9.30 PM");
