interface Props {
	children: JSX.Element;
}

const TimerContainer = (props: Props) => {
	return <section>{props.children}</section>;
};

export default TimerContainer;
