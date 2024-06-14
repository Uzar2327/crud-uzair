
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTask(id);
  }, [id]);

  const fetchTask = async (taskId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/tasks/${taskId}`
      );
      setTask(response.data);
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  if (!task) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto mt-4 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Task Details</h2>
      <p className="text-lg mb-2">
        <span className="font-semibold">Title:</span> {task.title}
      </p>
      <p className="text-lg mb-2">
        <span className="font-semibold">Description:</span> {task.description}
      </p>
      <p className="text-lg">
        <span className="font-semibold">Completed:</span>{" "}
        {task.completed ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default TaskDetails;
