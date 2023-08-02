import { useState } from 'react';
import startSVG from '/start.svg';
import pauseSVG from '/pause.svg';
import resetSVG from '/reset.svg';
import nextSVG from '/next.svg';

interface propsTimerControl {
	start: Function;
	pause: Function;
	stop: Function;
	reset: Function;
}

const TimerControl = (props: propsTimerControl) => {
	const [isPlay, setIsPlay] = useState<boolean>(false);
	return (
		<div className='flex justify-around'>
			{isPlay ? (
				<>
					<div>
						<button
							type='button'
							onClick={() => {
								props.reset();
							}}
						>
							Reset
							<img src={resetSVG} className='w-12 p-1' alt='Reiniciar' />
						</button>
					</div>
					<div>
						<button
							type='button'
							onClick={() => {
								setIsPlay(false);
								props.pause();
							}}
						>
							Pause
							<img src={pauseSVG} className='w-12 p-1' alt='Pausar' />
						</button>
					</div>
					<div>
						<button
							type='button'
							onClick={() => {
								setIsPlay(false);
								props.pause();
							}}
						>
							Next
							<img src={pauseSVG} className='w-12 p-1' alt='Pausar' />
						</button>
					</div>
				</>
			) : (
				<div>
					<button
						type='button'
						onClick={() => {
							setIsPlay(true);
							props.start();
						}}
					>
						Play
						<img src={startSVG} className='w-12 p-1' alt='Iniciar' />
					</button>
				</div>
			)}
		</div>
	);
};

export default TimerControl;
