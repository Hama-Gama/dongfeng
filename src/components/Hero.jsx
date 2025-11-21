import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
	const { t } = useTranslation()
	const [visible, setVisible] = useState(false)
	const [bgImage, setBgImage] = useState('/images/hero-pc.jpg')

	useEffect(() => {
		// Анимация появления
		const timer = setTimeout(() => setVisible(true), 50)

		// Проверка ширины экрана
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setBgImage('/images/hero-sm.jpg')
			} else {
				setBgImage('/images/hero-pc.jpg')
			}
		}

		handleResize() // вызвать при монтировании
		window.addEventListener('resize', handleResize)

		return () => {
			clearTimeout(timer)
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<section
			className='relative w-full h-screen bg-cover bg-center'
			style={{ backgroundImage: `url('${bgImage}')` }}
		>
			<div className='absolute inset-0 bg-black/50'></div>

			<div className='relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4'>
				{/* h1 + p — выходят слева */}
				<motion.div
					initial={{ x: -120, opacity: 0 }}
					animate={visible ? { x: 0, opacity: 1 } : {}}
					transition={{ type: 'spring', stiffness: 70, damping: 12 }}
					className='flex flex-col items-center'
				>
					<h1 className='text-5xl md:text-6xl font-bold'>{t('hero.title')}</h1>

					<p className='mt-2 text-lg md:text-2xl font-semibold'>
						{t('hero.genre')}
					</p>
				</motion.div>

				{/* h2 — заходит справа */}
				<motion.h2
					initial={{ x: 120, opacity: 0 }}
					animate={visible ? { x: 0, opacity: 1 } : {}}
					transition={{
						type: 'spring',
						stiffness: 70,
						damping: 12,
						delay: 0.2,
					}}
					className='mt-3 text-2xl md:text-3xl'
				>
					{t('hero.subtitle')}
				</motion.h2>
			</div>
		</section>
	)
}
