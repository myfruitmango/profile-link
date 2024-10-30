// ** React Imports
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// ** Pages Imports
import HomePage from 'pages/home'
import Page404 from 'pages/404'
import ComingSoonPage from 'pages/coming-soon'

// ** Sub-Route Imports

const RoutePage = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="*" element={<Page404 />} />
			<Route path="/coming-soon" element={<ComingSoonPage />} />
		</Routes>
	)
}

export default RoutePage
