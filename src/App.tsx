import Explain from './components/sections/Explain';
import Tasks from './components/sections/Tasks';
import Timer from './components/sections/Timer';

const App = () => {
	return (
		<div className='bg-redPod h-screen p-3'>
			<div className='md:flex'>
				<header className='text-center text-3xl font-semibold font-roboto md:text-left md:w-1/2 md:text-4xl 2xl:text-5xl'>
					PomodoroApp
				</header>
				<nav className='md:w-1/2'>Navigate</nav>
			</div>
			<>
				<Timer />
			</>
			<section>
				<Tasks />
			</section>
			<section>
				<Explain />
			</section>
			<footer>Footer</footer>
		</div>
	);
};

export default App;
