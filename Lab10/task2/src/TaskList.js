import React from 'react';

const TaskList = ({ tasks, onRemoveTask }) => {
    
  if (tasks.length === 0) {
    return (
      <div style={styles.emptyState}>
        <p>Your list is empty. Add a task to get started!</p>
      </div>
    );
  }

  return (
    <ul style={styles.list}>

      {tasks.map((task) => (

        <li key={task.id} style={styles.listItem}>
          <span>{task.text}</span>
          <button 
            onClick={() => onRemoveTask(task.id)} 
            style={styles.removeButton}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

const styles = {
  emptyState: { textAlign: 'center', color: '#666', fontStyle: 'italic', padding: '20px' },
  list: { listStyleType: 'none', padding: 0, margin: 0 },
  listItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', borderBottom: '1px solid #eee', backgroundColor: '#fdfdfd', marginBottom: '5px', borderRadius: '4px' },
  removeButton: { backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }
};

export default TaskList;