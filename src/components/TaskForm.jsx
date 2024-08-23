import { useState } from 'react';
import useTaskStore from '../store/useTaskStore';

const TaskForm = () => {
	const [text, setText] = useState('');
	const addTask = useTaskStore((state) => state.addTask);

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask({ id: Date.now(), title: text, completed: false });
		setText('');
	};

	return (
		<form onSubmit={handleSubmit} className='mb-4'>
			<input
				type='text'
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder='Enter task...'
				className='p-2 mr-2 border border-gray-300 rounded-md w-60'
			/>
			<button
				type='submit'
				className='p-2 text-white bg-green-500 rounded-md'>
				Add Task
			</button>
		</form>
	);
};

export default TaskForm;
