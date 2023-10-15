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

app.post("/delete-task", function(req, res) {
  let index = req.body.index;
  let task = req.body.task;
  tasks.splice(index, 1); // Remove task from tasks array
  console.log("Deleted task:", task);
  res.sendStatus(200); // Send status code 200 (OK)
});

app.post("/delete-work-task", function(req, res) {
  let index = req.body.index;
  let workTask = req.body.task;
  workTasks.splice(index, 1); // Remove task from workTasks array
  console.log("Deleted task:", workTask);
  res.sendStatus(200); // Send status code 200 (OK)
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });