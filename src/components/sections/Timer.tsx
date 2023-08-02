import Clock from '../cards/Clock';
import useTimer from '../../hooks/useTimer';

const Timer = () => {
	const { seconds, running, start, pause, reset, stop } = useTimer({
		initialSeconds: 5,
	});
	console.log('hola', seconds);

	return (
		<section className='border-4 p-1 bg-red-450'>
			<Clock seconds={seconds} />
			<button onClick={start} type='button' className='px-3'>
				Run
			</button>
			<button onClick={pause} type='button' className='px-3'>
				Pause
			</button>
			<button onClick={reset} type='button' className='px-3'>
				Reset
			</button>
			<button onClick={stop} type='button'>
				Stop
			</button>
		</section>
	);
};

export default Timer;
