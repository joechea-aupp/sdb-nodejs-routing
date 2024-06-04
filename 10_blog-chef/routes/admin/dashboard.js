export default (req, res) => {
  res.render("dashboard", {
    user: req.session.user,
    posts: [
      {
        id: 1,
        author: "Joe Doe",
        title: "First Post",
        content: "This is the first post",
      },
      {
        id: 2,
        author: "Jane Smith",
        title: "Second Post",
        content: "This is the second post",
      },
      {
        id: 3,
        author: "Srey Pov",
        title: "Third Post",
        content: "This is the third post",
      },
    ],
  });
};
