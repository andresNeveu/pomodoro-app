interface Props {
	children: JSX.Element;
}

const TimerContainer = (props: Props) => {
	return <section className=' bg-blue-700'>{props.children}</section>;
};

export default TimerContainer;
