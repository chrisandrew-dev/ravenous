import Image from 'next/image'

const HeroBanner = ({ children, src }) => {
	const styles = {
		background: `url(${src}) bottom left / cover`,
		width: '100%',
		padding: '2em 1em',
		borderRadius: '0.25em',
		marginBlock: '1rem',
	}

	return (
		<div style={styles}>
			{children}
		</div>
	)
}

export default HeroBanner
