// ** React Imports
import React from 'react'

// ** Elements Imports
import Animated from 'components/elements/animated'
import Background from 'components/elements/background'
import Description from 'components/elements/description'

const ComingSoonFragment = () => {
	return (
		<div className="relative bg-slate-100">
			<Background />
			<Animated />
			<div className="w-screen h-screen grid items-center justify-items-center relative">
				<Description />
			</div>
		</div>
	)
}
export default ComingSoonFragment
