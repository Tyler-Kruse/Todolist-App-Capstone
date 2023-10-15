import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const tasks = [];
const workTasks = [];

app.get("/", (req, res) => {
  res.render("index.ejs", {tasks: tasks});
});

app.get("/work", (req, res) => {
    res.render("work.ejs", {workTasks: workTasks});
});

app.post("/", (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.redirect("/");
});

app.post("/work", (req, res) => {
  const workTask = req.body.task;
  workTasks.push(workTask);
  res.redirect("/work");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });