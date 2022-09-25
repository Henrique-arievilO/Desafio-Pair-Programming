import React from "react";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import About from "./components/About";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";

export default function App() {
	return (
		<>
			<Header />
			<About />
			<Recipes />
			<Subscribe />
			<Footer />
		</>
	);
}
