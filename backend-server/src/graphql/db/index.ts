interface User {
	name: String;
	birthDay: String;
	phoneNumber: String;
}

interface Post {
	title: String;
	created: String;
}

let users: User[] = [
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

let posts: Post[] = [
  {
    title : "Abook",
    created : "2020/01/01"
  },
  {
    title : "Bbook",
    created : "2020/01/02"
  }
];

module.exports = {
  Users : users,
  Posts : posts,
}