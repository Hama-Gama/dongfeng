import ProductCard from './ProductCard'
import { useTranslation } from 'react-i18next'

const ProductGrid = () => {
	const { t } = useTranslation()

	return (
		<section id='products' className='max-w-6xl mx-auto px-2 py-12'>
			<h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
				{t('products.title')}
			</h2>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
				<ProductCard
					id='dongfeng-4251'
					image='/images/1.jpeg'
					title='Dongfeng DFL451A'
				/>
				<ProductCard
					id='dongfeng-3751'
					image='/images/2.jpg'
					title='Dongfeng DFL371A'
				/>
				<ProductCard
					id='dongfeng-3400'
					image='/images/3.jpg'
					title='Dongfeng DFL300B'
				/>
				<ProductCard
					id='dongfeng-3400'
					image='/images/4.jpg'
					title='Dongfeng DFL300B'
				/>
				{/* остальные карточки */}
			</div>

			{/* Кнопка открыть каталог */}
			<div className='mt-10 text-center'>
				<a
					href='/catalog.pdf'
					target='_blank'
					rel='noopener noreferrer'
					className='inline-block bg-black text-white font-semibold px-6 py-3 rounded-4xl shadow 
                     hover:bg-gray-600 transition-all duration-300'
				>
					{t('products.downloadCatalog')}
				</a>
			</div>
		</section>
	)
}

export default ProductGrid
