import useTimer from '../../hooks/useTimer';
import startSVG from '/start.svg';
import pauseSVG from '/pause.svg';
import resetSVG from '/reset.svg';
import nextSVG from '/next.svg';
import { useEffect } from 'react';
import Clock from '../cards/Clock';

const Timer = () => {
	const { seconds, running, start, pause, reset, stop } = useTimer({
		initialSeconds: 5,
	});
	console.log('hola', running, seconds);

	useEffect(() => {
		if (!running && seconds === 0) {
			stop();
		}
	}, [running]);

	return (
		<>
			<ul className='flex justify-evenly md:w-1/3 mx-auto py-2'>
				<li>Work</li>
				<li>Short Break</li>
				<li>Long Break</li>
			</ul>
			<section className='bg-red-400 rounded md:w-1/3 mx-auto px-2 py-4'>
				<Clock />
			</section>
		</>
	);
};

export default Timer;
