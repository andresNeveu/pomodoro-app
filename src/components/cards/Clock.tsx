const formatNumber = (num: number): String => {
	return num.toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
};

interface propsClock {
	seconds: number;
}

const Clock = (props: propsClock) => {
	return (
		<div className='flex justify-center font-roboto font-semibold text-7xl'>
			<span>{formatNumber(Math.floor(props.seconds / 60))}</span>
			<span>:</span>
			<span>{formatNumber(props.seconds % 60)}</span>
		</div>
	);
};

export default Clock;
