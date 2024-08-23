import useTaskStore from '../store/useTaskStore';

const TaskList = () => {
	const { tasks, removeTask, toggleTask } = useTaskStore();

	return (
		<div>
			<h2 className='mb-4 text-lg font-semibold text-gray-700'>Task List</h2>
			<ul className='p-0 list-none'>
				{tasks.map((task) => (
					<li
						key={task.id}
						className={`flex items-center mb-2 p-2 rounded-md bg-gray-100`}>
						<span
							className={`flex-grow mr-4 ${
								task.completed ? 'line-through' : ''
							}`}>
							{task.title}
						</span>
						<input
							type='checkbox'
							checked={task.completed}
							onChange={() => toggleTask(task.id)}
							className='w-4 h-4 mr-2 text-green-500 cursor-pointer'
						/>
						<button
							onClick={() => removeTask(task.id)}
							className='px-2 py-1 text-white bg-red-500 rounded-md cursor-pointer'>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TaskList;
