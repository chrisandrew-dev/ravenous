import Business from '../components/Business'

const BusinessList = ({businesses}) => {
	if (!businesses) {
		return <p>I'm salivating already...</p>
	} else {
		return (
			businesses.map(business => {
				<Business props={business}/>
			})
		)
	}
}

export default BusinessList
