
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Task List</h1>
        <ul className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <li key={task._id} className="py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{task.title}</h2>
                  <p className="text-sm text-gray-500">{task.description}</p>
                  <p className="text-sm">
                    {task.completed ? "Completed" : "Pending"}
                  </p>
                </div>
                <div className="space-x-2">
                  <Link
                    to={`/tasks/${task._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit/${task._id}`}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
