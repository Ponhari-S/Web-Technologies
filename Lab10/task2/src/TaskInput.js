import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      onAddTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div style={styles.inputContainer}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new task..."
        style={styles.input}
      />
      <button onClick={handleAddClick} style={styles.addButton}>
        Add
      </button>
    </div>
  );
};

const styles = {
  inputContainer: { display: 'flex', gap: '10px', marginBottom: '20px' },
  input: { flex: 1, padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' },
  addButton: { padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
};

export default TaskInput;