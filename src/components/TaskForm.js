import React from 'react';

const TaskForm = ({ handleChange, newTask, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<input name="task" placeholder="Task" onChange={handleChange} value={newTask} />
			<button>Add</button>
		</form>
	);
};

export default TaskForm;
