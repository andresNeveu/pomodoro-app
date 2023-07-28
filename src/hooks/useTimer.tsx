import { useCallback, useEffect, useState } from 'react';

const interval = (delay = 0) => (callback: Function) =>
	useEffect(() => {
		const id = setInterval(callback, delay);

		return () => clearInterval(id);
	}, [callback]);

const useSecondsInterval = interval(1000);

const useTimer = ({ initialSeconds = 0, initiallyRunning = false } = {}) => {
	const [seconds, setSeconds] = useState(initialSeconds);
	const [running, setRunning] = useState(initiallyRunning);

	const tick = useCallback(() => {
		if (running) {
			setSeconds((seconds) => {
				if (seconds === 0) {
					pause();
					return 0;
				}
				return seconds - 1;
			});
		} else {
			return undefined;
		}
	}, [running]);

	const start = () => setRunning(true);
	const pause = () => setRunning(false);
	const reset = () => setSeconds(initialSeconds);
	const stop = () => {
		pause();
		reset();
	};

	useSecondsInterval(tick);

	return { pause, reset, running, seconds, start, stop };
};

export default useTimer;
