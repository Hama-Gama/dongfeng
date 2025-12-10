import React from 'react'
import { Helmet } from 'react-helmet'
import i18n from '../i18n'

const SeoCompanySchema = () => {
	const lang = i18n.language // ru | kk

	// --- Мультиязычные мета-теги ---
	const meta = {
		ru: {
			title:
				'ТОО Alatau Auto Tech — официальный дистрибьютор Dongfeng Commercial Vehicle в Казахстане',
			description:
				'Alatau Auto Tech — официальный дистрибьютор Dongfeng Commercial Vehicle Co., Ltd. в Казахстане. Продажа грузовых автомобилей, сервис, гарантия, оригинальные запчасти.',
		},
		kk: {
			title:
				'Alatau Auto Tech — Қазақстандағы Dongfeng Commercial Vehicle ресми дистрибьюторы',
			description:
				'Alatau Auto Tech — Қазақстандағы Dongfeng Commercial Vehicle Co., Ltd. ресми дистрибьюторы. Жүк көліктері, сервис, кепілдік және қосалқы бөлшектер.',
		},
	}

	const metaTitle = meta[lang]?.title || meta.ru.title
	const metaDescription = meta[lang]?.description || meta.ru.description

	// --- Основные данные о компании ---
	const data = {
		name: 'ТОО Alatau Auto Tech',
		url: 'https://aatech.kz',
		image: 'https://dongfeng-kz.netlify.app/images/preview.jpg', // заменить при необходимости
		logo: 'https://aatech.kz/images/logo.png',
		phone: ['+7 747 927 85 75', '+7 701 649 00 37'],
		address: {
			street: 'ул. Суюнбая 143а',
			city: 'Алматы',
			country: 'Казахстан',
		},
	}

	// --- Schema.org JSON-LD ---
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'AutoDealer',
		name: data.name,
		url: data.url,
		logo: data.logo,
		image: data.image,
		description: metaDescription,
		telephone: data.phone.join(', '),
		address: {
			'@type': 'PostalAddress',
			streetAddress: data.address.street,
			addressLocality: data.address.city,
			addressCountry: data.address.country,
		},
		// sameAs: [
		// 	'https://www.facebook.com/',
		// 	'https://www.instagram.com/',
		// 	'https://www.youtube.com/',
		// ],
	}

	return (
		<Helmet>
			{/* Язык документа */}
			<html lang={lang} />

			{/* Title + Description */}
			<title>{metaTitle}</title>
			<meta name='description' content={metaDescription} />

			{/* --- Open Graph --- */}
			<meta property='og:type' content='website' />
			<meta property='og:title' content={metaTitle} />
			<meta property='og:description' content={metaDescription} />
			<meta property='og:url' content={data.url} />
			<meta property='og:image' content={data.image} />
			<meta property='og:site_name' content={data.name} />
			<meta property='og:locale' content={lang === 'kk' ? 'kk_KZ' : 'ru_RU'} />

			{/* --- Twitter Card --- */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={metaTitle} />
			<meta name='twitter:description' content={metaDescription} />
			<meta name='twitter:image' content={data.image} />

			{/* --- Альтернативные языки --- */}
			<link rel='alternate' href='https://aatech.kz/ru' hrefLang='ru' />
			<link rel='alternate' href='https://aatech.kz/kk' hrefLang='kk' />
			<link rel='alternate' href='https://aatech.kz' hrefLang='x-default' />

			{/* --- Schema.org JSON-LD --- */}
			<script type='application/ld+json'>{JSON.stringify(schema)}</script>
		</Helmet>
	)
}

export default SeoCompanySchema
