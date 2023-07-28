const formatNumber = (num: number): String => {
	return num.toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
};

interface timeClock {
	seconds: number;
}

const Clock = (props: timeClock) => {
	return (
		<>
			<span>{formatNumber(Math.floor(props.seconds / 60))}</span>
			<span>:</span>
			<span>{formatNumber(props.seconds % 60)}</span>
		</>
	);
};

export default Clock;
