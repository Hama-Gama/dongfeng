import React from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Instagram, Send } from 'lucide-react'

const TeamSlider = () => {
	const { t } = useTranslation()

	const teamMembers = [
		{
			name: t('crew.names.askar'),
			role: t('crew.producer'),
			img: '/sliders-team/1.jpg',
			telegram: 'https://web.telegram.org/',
			instagram: 'https://instagram.com/',
		},
		{
			name: t('crew.vacant'),
			role: t('crew.director'),
			img: '/placeholders/men.jpg',
			telegram: 'https://web.telegram.org/',
			instagram: 'https://instagram.com/',
		},
		{
			name: t('crew.vacant'),
			role: t('crew.writer'),
			img: '/placeholders/men.jpg',
			telegram: 'https://web.telegram.org/',
			instagram: 'https://instagram.com/',
		},
		{
			name: t('crew.vacant'),
			role: t('crew.stunt'),
			img: '/placeholders/men.jpg',
			telegram: 'https://web.telegram.org/',
			instagram: 'https://instagram.com/',
		},
		{
			name: t('crew.vacant'),
			role: t('crew.cinematographer'),
			img: '/placeholders/men.jpg',
			telegram: 'https://web.telegram.org/',
			instagram: 'https://instagram.com/',
		},
		{
			name: t('crew.vacant'),
			role: t('crew.sound'),
			img: '/placeholders/men.jpg',
			telegram: 'https://web.telegram.org/',
			instagram: 'https://instagram.com/',
		},
	]

	return (
		<section className='py-4 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-6 text-center text-gray-900'>
					{t('crew.title')}
				</h2>

				<Swiper
					modules={[Pagination]}
					spaceBetween={10}
					slidesPerView={1.2}
					breakpoints={{
						640: { slidesPerView: 2 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 4 },
					}}
					pagination={{ clickable: true }}
					className='pb-10'
				>
					{teamMembers.map((member, index) => (
						<SwiperSlide key={index}>
							<Card className='shadow-md hover:shadow-lg transition-all duration-300 rounded-xl bg-white m-0 mb-10'>
								<CardContent className='flex flex-col items-center p-2 text-center'>
									<img
										src={member.img}
										alt={member.name}
										className='w-32 h-32 rounded-full object-cover mb-4 border border-gray-200'
									/>
									<h3 className='text-xl font-semibold text-gray-900'>
										{member.name}
									</h3>
									<p className='text-gray-600 mt-1'>{member.role}</p>

									<div className='flex gap-3 mt-4'>
										<a
											href={member.telegram}
											target='_blank'
											rel='noopener noreferrer'
										>
											<Button
												variant='outline'
												size='icon'
												className='rounded-full hover:bg-blue-50 transition-all'
											>
												<Send size={18} />
											</Button>
										</a>
										<a
											href={member.instagram}
											target='_blank'
											rel='noopener noreferrer'
										>
											<Button
												variant='outline'
												size='icon'
												className='rounded-full hover:bg-pink-50 transition-all'
											>
												<Instagram size={18} />
											</Button>
										</a>
									</div>
								</CardContent>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default TeamSlider
