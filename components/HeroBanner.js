import Image from 'next/image'

const HeroBanner = ({ children, src }) => {
	const styles = {
		background: `url(${src}) center / cover`,
		width: '100%',
		padding: '3em 1em'
	}

	return (
		<div style={styles}>
			{children}
		</div>
	)
}

export default HeroBanner
