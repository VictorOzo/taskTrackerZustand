import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Snackbar from './components/Snackbar';

const App = () => {
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='p-6 text-center bg-white rounded-lg shadow-md w-96'>
				<div className='mb-6'>
					<h1 className='text-2xl font-semibold'>Task Tracker</h1>
				</div>
				<div className='mb-4'>
					<TaskForm />
					<TaskList />
				</div>
				<Snackbar />
			</div>
		</div>
	);
};

export default App;
