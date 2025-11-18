import React from 'react'

export default function Footer() {
	return (
		<footer className='mt-auto border-t bg-gray-800 backdrop-blur-md'>
			<div className='max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-300'>
				© {new Date().getFullYear()} ТОО Alatau Auto Tech. All rights reserved.
			</div>
		</footer>
	)
}
