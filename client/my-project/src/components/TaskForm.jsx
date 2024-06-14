import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (id) {
      fetchTask(id);
    }
  }, [id]);

  const fetchTask = async (taskId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/tasks/${taskId}`
      );
      const { title, description, completed } = response.data;
      setTitle(title);
      setDescription(description);
      setCompleted(completed);
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { title, description, completed };

    try {
      if (id) {
        await axios.put(`http://localhost:5000/api/tasks/${id}`, task);
      } else {
        await axios.post("http://localhost:5000/api/tasks", task);
      }
      navigate("/");
    } catch (error) {
      console.error("Error submitting task:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        {id ? "Edit Task" : "Create Task"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="text-gray-700">Completed</span>
        </label>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
        >
          {id ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
