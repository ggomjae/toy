interface Post {
	title: String;
	created: String;
}

let postList: Post[] = [
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
  Posts : postList,
}