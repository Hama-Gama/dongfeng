import About from "@/components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Contacts from "@/components/Contacts";
import MovieSchema from "@/components/MovieSchema";

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen'>
			<MovieSchema />
			<Header />
			<main className="flex-1"> 
				<Hero />
				<About /> 
				<Contacts />
			</main>
			<Footer />
		</div>
	)
}
