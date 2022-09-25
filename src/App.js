import React from "react";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import About from "./components/About";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";
import { GlobalStyle } from "./global/GlobalStyle";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<About />
			<Recipes />
			<Subscribe />
			<Footer />
		</>
	);
}
