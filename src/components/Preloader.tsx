const totalSpans = 12;

const Preloader = () => {
	return (
		<div className='preloader' style={{ '--preloader-spans': totalSpans } as React.CSSProperties}>
			<div className='preloader__spinner'>
				{Array(totalSpans)
					.fill(null)
					.map((_, index) => (
						<span
							className='preloader__spinner-span'
							key={index}
							style={{ '--index': index } as React.CSSProperties}
						></span>
					))}
			</div>
		</div>
	);
};

export default Preloader;
