import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [timeSlot, setTimeSlot] = useState('morning');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    onAddTask({ title, timeSlot });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        className="task-input"
      />
      <select
        value={timeSlot}
        onChange={(e) => setTimeSlot(e.target.value)}
        className="time-slot-select"
      >
        <option value="morning">Morning</option>
        <option value="afternoon">Afternoon</option>
        <option value="evening">Evening</option>
      </select>
      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm; 