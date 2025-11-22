import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import React from 'react'
import { useTranslation } from 'react-i18next'
import ProductPage from './components/ProductPage'
import CategoryPage from './components/CategoryPage'




export default function App() {
	const { t } = useTranslation()

	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path='/product/:id' element={<ProductPage />} /> */}
				<Route path='/product/:id' element={<CategoryPage />} />
			</Routes>
		</div>
	)
}



