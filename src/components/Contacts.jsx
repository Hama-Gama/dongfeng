import React, { useState } from 'react'
import { FaWhatsapp, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const Contacts = () => {
	const { t } = useTranslation()
	const [copied, setCopied] = useState(false)
	const [formData, setFormData] = useState({
		from_name: '',
		from_email: '',
		message: '',
	})

	const email = 'yerassyl.zh@mail.ru'

	const handleCopy = () => {
		navigator.clipboard.writeText(email)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}


const handleChange = e => {
	setFormData({ ...formData, [e.target.name]: e.target.value })
}

const handleSubmit = e => {
	e.preventDefault()
	const sendingToast = toast.loading('Отправка...')

	emailjs
		.send(
			import.meta.env.VITE_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			{
				from_name: formData.name,
				from_email: formData.email,
				message: formData.message,
			},
			import.meta.env.VITE_EMAILJS_PUBLIC_KEY
		)
		.then(() => {
			 toast.success('Сообщение отправлено!', { id: sendingToast })
			setFormData({ name: '', email: '', message: '' })
		})
		.catch(() => {
			toast.error('Ошибка отправки', { id: sendingToast })
		})
}







	return (
		<section id='contacts' className='py-16 bg-gray-50'>
			<div className='max-w-6xl mx-auto px-4'>
				<h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2'>
					{t('contacts.title')}
				</h2>
				<p className='text-center text-gray-600 mb-6'>
					{t('contacts.subtitle')}
				</p>

				<div className='grid md:grid-cols-2 gap-8'>
					{/* Контактная информация */}
					<Card className='shadow-md border-none bg-white'>
						<CardContent className='p-6 flex flex-col gap-6'>
							{/* Email с копированием */}
							<div className='flex items-center gap-3'>
								<Mail className='text-gray-700' />
								<p className='text-gray-800'>{email}</p>
								<button
									onClick={handleCopy}
									className='ml-2 text-gray-500 hover:text-black transition-all'
									title={copied ? t('contacts.copied') : t('contacts.copy')}
								>
									{copied ? (
										<Check className='w-4 h-4 text-green-500' />
									) : (
										<Copy className='w-4 h-4' />
									)}
								</button>
							</div>

							<div className='flex items-center gap-3'>
								<Phone className='text-gray-700' />
								<p className='text-gray-800'>+7 747 927 85 75</p>
							</div>

							<div className='flex items-center gap-3'>
								<Phone className='text-gray-700' />
								<p className='text-gray-800'>+7 701 649 00 37</p>
							</div>

							<div className='flex items-center gap-3'>
								<MapPin className='text-gray-700' />
								<p className='text-gray-800'>{t('contacts.address')}</p>
							</div>

							{/* Соцсети в одну строку */}
							<div className='flex items-center justify-start gap-6 mt-4'>
								<a
									href='https://wa.me/77479278575'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Button
										variant='outline'
										size='icon'
										className='w-12 h-12 rounded-full border-gray-200 hover:bg-green-50 text-green-600 hover:text-green-700 transition-all'
									>
										<FaWhatsapp size={32} />
									</Button>
								</a>

								<a
									href='https://t.me/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Button
										variant='outline'
										size='icon'
										className='w-12 h-12 rounded-full border-gray-200 hover:bg-blue-50 text-blue-500 hover:text-blue-600 transition-all'
									>
										<FaTelegramPlane size={32} />
									</Button>
								</a>

								<a
									href='https://instagram.com/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Button
										variant='outline'
										size='icon'
										className='w-12 h-12 rounded-full border-gray-200 hover:bg-pink-50 text-pink-600 hover:text-pink-700 transition-all'
									>
										<FaInstagram size={32} />
									</Button>
								</a>
							</div>
						</CardContent>
					</Card>

					{/* Форма */}
					<Card className='shadow-md border-none bg-white'>
						<form onSubmit={handleSubmit}>
						<CardContent className='p-6 space-y-4 text-2xl'>
							<Input
								name='name'
								value={formData.name}
								onChange={handleChange}
								placeholder={t('contacts.name')}
								className='rounded-[5px]'
							/>
							<Input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								placeholder={t('contacts.email')}
								className='rounded-[5px]'
							/>
							<Textarea
								name='message'
								value={formData.message}
								onChange={handleChange}
								placeholder={t('contacts.message')}
								className='min-h-[120px] rounded-[5px]'
							/>
							<Button
								type='submit'
								className='w-[200px] bg-black hover:bg-gray-800 text-white rounded-xl flex items-center justify-center gap-2'
							>
								<Send className='w-4 h-4' /> {t('contacts.send')}
							</Button>
						</CardContent>
						</form>
					</Card>
				</div>
			</div>
		</section>
	)
}

export default Contacts
