import { useEffect, useState } from 'react';
import TimerContainer from '../containers/TimerContainer';

const formatNumber = (num: Number): String => {
	return num.toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
};

interface timeClock {
	min: Number;
	sec: Number;
}

const Clock = (props: timeClock) => {
	return (
		<>
			<span className='minutes'>{formatNumber(props.min)}</span>
			<span className='divider'>:</span>
			<span className='seconds'>{formatNumber(props.sec)}</span>
		</>
	);
};

const Timer = () => {
	const [clock, setClock] = useState<JSX.Element>();
	const [active, setActive] = useState<Boolean>(false);

	console.log(1);

	useEffect(() => {
		const duration = 1;
		let min = duration;
		let sec = 0;

		if (active) {
			const interval = setInterval(() => {
				sec--;
				if (sec === -1) {
					sec = 59;
					min--;
				}
				const newValue = <Clock min={min} sec={sec} />;
				if (min === 0 && sec === 0) {
					clearInterval(interval);
				}
				setClock(newValue);
			}, 1000);
		} else {
			const newValue = <Clock min={min} sec={sec} />;
			setClock(newValue);
		}
	}, []);

	return (
		<TimerContainer>
			<>{clock}</>
		</TimerContainer>
	);
};

export default Timer;
