import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React Hooks' },
    { id: 2, text: 'Understand list mapping' }
  ]);

  const handleAddTask = (newTaskText) => {
    const newTask = {
      id: Date.now(), 
      text: newTaskText
    };
    
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleRemoveTask = (taskIdToRemove) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskIdToRemove));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Task Manager</h2>
      
      <TaskInput onAddTask={handleAddTask} />
      
      <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '450px',
    margin: '40px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffffff'
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginTop: '0',
    marginBottom: '20px'
  }
};

export default TaskManager;