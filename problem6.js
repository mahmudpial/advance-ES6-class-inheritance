const student = {
  name: "pial",
  age: "26",
};
const object = student.age;
console.log(object);

// Access Object values

let data = {
  location: [
    {
      latitude: "35.5 ,37.8",
      longitude: "98.77 ,58.7",
      city: "Hyderabad",
      country: "india",
    },
  ],
};

const getData = data.location[0].country;
console.log(getData);

// ..............................................................
const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const getData1 = user.address.geo.lat;
console.log(getData1);
