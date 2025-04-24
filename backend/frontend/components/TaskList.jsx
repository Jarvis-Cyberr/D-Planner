import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks");
        setTasks(response.data);
      } catch (err) {
        console.error("Error fetching tasks", err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task._id} className="task-card">
          <h3>{task.title}</h3>
          <p>{task.timeSlot}</p>
          <button>Mark as Complete</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
