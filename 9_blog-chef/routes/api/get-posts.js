export default (req, res) => {
  const posts = [
    {
      id: 1,
      title: "My first blog post",
    },
    {
      id: 2,
      title: "My second blog post",
    },
    {
      id: 3,
      title: "My third blog post",
    },
  ];

  res.json({ posts });
};
