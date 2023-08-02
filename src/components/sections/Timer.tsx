import Clock from '../cards/Clock';
import useTimer from '../../hooks/useTimer';
import TimerControl from '../controls/TimerControl';

const Timer = () => {
	const { seconds, start, pause, reset, stop } = useTimer({
		initialSeconds: 5,
	});
	console.log('hola', seconds);

	return (
		<section className='p-1 bg-red-400 rounded'>
			<Clock seconds={seconds} />
			<TimerControl start={start} pause={pause} reset={reset} stop={stop} />
		</section>
	);
};

export default Timer;
