import About from "@/components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Contacts from "@/components/Contacts";
import ProductCard from "@/components/ProductCard";
import ProductGrid from "@/components/ProductGrid";
import SeoCompanySchema from "@/components/SeoCompanySchema";

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen'>
			<SeoCompanySchema />
			<Header />
			<main className='flex-1'>
				<Hero />
				<About />
        <ProductGrid />
				<Contacts />
			</main>
			<Footer />
		</div>
	)
}
