import useTimer from '../../hooks/useTimer';
import startSVG from '/start.svg';
import pauseSVG from '/pause.svg';
import resetSVG from '/reset.svg';
import nextSVG from '/next.svg';
import { useEffect } from 'react';

const Clock = () => {
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
			<div className='flex justify-center font-roboto font-semibold text-7xl p-1 md:text-8xl'>
				<span>{formatNumber(Math.floor(seconds / 60))}</span>
				<span>:</span>
				<span>{formatNumber(seconds % 60)}</span>
			</div>
			<div className='flex justify-around p-1'>
				{running ? (
					<>
						<DivButton>
							<button
								type='button'
								onClick={() => {
									reset();
								}}
							>
								Reset
								<img src={resetSVG} className='w-12 p-1' alt='Reiniciar' />
							</button>
						</DivButton>
						<DivButton>
							<button
								type='button'
								onClick={() => {
									pause();
								}}
							>
								Pause
								<img src={pauseSVG} className='w-12 p-1' alt='Pausar' />
							</button>
						</DivButton>
						<DivButton>
							<button
								type='button'
								onClick={() => {
									stop();
								}}
							>
								Next
								<img src={nextSVG} className='w-12 p-1' alt='Pausar' />
							</button>
						</DivButton>
					</>
				) : (
					<DivButton>
						<button
							type='button'
							onClick={() => {
								start();
							}}
						>
							Play
							<img src={startSVG} className='w-12 p-1' alt='Iniciar' />
						</button>
					</DivButton>
				)}
			</div>
		</>
	);
};

interface propsDivButton {
	children: JSX.Element;
}

const DivButton = (props: propsDivButton) => {
	return <div className='rounded-md text-center hover:shadow-md md:w-20 p-1'>{props.children}</div>;
};

const formatNumber = (num: number): String => {
	return num.toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
};

export default Clock;
