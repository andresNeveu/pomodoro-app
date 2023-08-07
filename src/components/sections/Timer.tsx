import { useEffect, useState } from 'react';
import Clock from '../cards/Clock';

const nameTimes = ['Work', 'Short Break', 'Long Break'];
const time = [18, 3, 6];

const Timer = () => {
	const [mode, setMode] = useState(0);
	const [clock, setClock] = useState<JSX.Element>();

	useEffect(() => {
		switch (mode) {
			case 0:
				setClock(<Clock key={time[0]} initialSeconds={time[0]} />);
				break;
			case 1:
				setClock(<Clock key={time[1]} initialSeconds={time[1]} />);
				break;
			default:
				setClock(<Clock key={time[2]} initialSeconds={time[2]} />);
				break;
		}
	}, [mode]);

	return (
		<>
			<ul className='flex justify-evenly md:w-1/3 mx-auto'>
				{nameTimes.map((nameTime, index) => (
					<li
						key={nameTime}
						className={`p-2 w-1/3 text-center ${mode === index ? 'bg-red-400' : null}`}
					>
						<button type='button' onClick={() => setMode(index)}>
							{nameTime}
						</button>
					</li>
				))}
			</ul>
			<section className='bg-red-400 rounded md:w-1/3 mx-auto px-2 py-4'>{clock}</section>
		</>
	);
};

export default Timer;
