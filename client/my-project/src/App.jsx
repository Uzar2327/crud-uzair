import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TaskDetails";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/create" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
      </Routes>
    </Router>
  );
};

export default App;
