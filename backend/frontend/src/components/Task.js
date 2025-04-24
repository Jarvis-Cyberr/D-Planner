import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <div className="task-item">
      <div className="task-content">
        <h3>{task.title}</h3>
        <p>Time Slot: {task.timeSlot}</p>
      </div>
      <button onClick={() => onDelete(task._id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default Task; 