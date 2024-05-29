import moment from "moment"

export default (req, res) => {
  res.render("dashboard", {
    user: req.session.user.name,
    lastLoggedIn: moment(req.session.user.lastLoggedIn).format("MMMM, Do YYYY, h:mm:ss a"),
    posts: [
      {
        id: 1,
        author: "Joe M",
        title:"I love Express",
        content: "Express is a wonderful frameword for building a Node.js app"
      },
      {
        id: 2,
        author: "Mike F",
        title:"Have you ever tried pug",
        content: "Currently, I am using pug, it seems interesting."
      }
    ]
  })
}