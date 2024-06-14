
import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
      <p className="text-gray-600 mb-2">{task.description}</p>
      <p className="text-sm text-gray-500 mb-2">Due Date: {task.dueDate}</p>
      <p
        className={`text-sm ${
          task.completed ? "text-green-600" : "text-red-600"
        }`}
      >
        {task.completed ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
};

export default TaskItem;
