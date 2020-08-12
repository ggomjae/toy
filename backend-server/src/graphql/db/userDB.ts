interface User {
	name: String;
	birthDay: String;
	phoneNumber: String;
}

let userList: User[] = [
    {
      name : "Agomjae",
      birthDay : "930218",
      phoneNumber : "01049112542"
    },
    {
      name : "Bgomjae",
      birthDay : "B930218",
      phoneNumber : "B01049112542"
    },
];


module.exports = {
  Users : userList
}