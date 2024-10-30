// ** React Imports
import React from 'react'

// ** Assets Imports
import animated from 'assets/animated.gif'

const Animated = () => {
	return (
		<div className="absolute h-screen w-screen grid justify-items-center items-start">
			<img className="h-44 mt-20 md:h-60 md:mt-10 bg-cover" src={animated} alt="SABAR YAK..." />
		</div>
	)
}
export default Animated
