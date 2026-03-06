import express from "express";
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.listen(5000, () => console.log("Server Started"));

app.use(express.urlencoded({ extended: true }));

let users = [
  { name: "Akshitha", email: "akshitha@gmail.com", password: "0317" },
  { name: "Saidivya", email: "saidivyapapanwar@gmail.com", password: "1205" },
  { name: "Manjunada", email: "manjugorige123@gmail.com", password: "1703" },
];

app.get("/login", (req, res) => {
  res.render("login", { error: null });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (user) {
    if (user.password === password) {
      res.redirect("/");
    } else {
      res.render("login", { error: "Invalid Password" });
    }
  } else {
    res.render("login", { error: "User not found" });
  }
  // res.redirect("/");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  users = [...users, req.body];
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("dashboard", { users });
});