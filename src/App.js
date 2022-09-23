import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";
import { GlobalStyle } from "./global/GlobalStyle.js";

export default function App() {
	return (
		<>
			<GlobalStyle />
			{/* 
        <Header/>
        <Recipes/>
        <About/>
        <Subscribe/>
        <Footer/>
      */}
			<About />
			<Subscribe />
			<Footer />
		</>
	);
}
