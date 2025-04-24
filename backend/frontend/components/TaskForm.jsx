import React, { useState } from "react";
import axios from "axios";

const TaskForm = () => {
  const [task, setTask] = useState({ title: "", timeSlot: "" });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/tasks", task);
      setTask({ title: "", timeSlot: "" });
    } catch (err) {
      console.error("Error adding task", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="timeSlot"
        placeholder="Time Slot (e.g., 9:00 AM - 10:00 AM)"
        value={task.timeSlot}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
