const user = [{ id: 1, name: "pial", job: "leader" }];
// console.log(user[0].job);

const data = {
  count: 5000,
  data: [
    { id: 1, name: "pial", job: "leader" },
    { id: 2, name: "mahmud", job: "co-leadedr" },
  ],
};

// console.log(data);
// countR = data.count;
// newName = data.data[1].name;
// newJob = data.data[1].job;
// console.log(countR, newName, newJob);

// .......................................................................

const newUser = {
  id: 851,
  name: " pial mahmud",
  address: {
    street: {
      first: "35/a Mirpur,1201",
      second: "third floor",
      third: " right side",
    },
    postOffice: "cantonment",
    city: "Dhaka",
  },
};
console.log(newUser.address.city);
console.log(newUser.address.street.first);
