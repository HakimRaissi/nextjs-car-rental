/* Imports */

import Head from "next/head";

import { Header, Footer } from "../components";

import { Hero, FeaturedCars, About, Blog } from "../containers";

/* Main Component */

const Home = () => {
    return (
        <>
            <Head>
                <title>Car Rental</title>
            </Head>
            <Header />
            <main className="min-h-screen max-w-7xl mx-auto">
                <Hero />
                <FeaturedCars />
                <About />
                <Blog />
            </main>

            <Footer />
        </>
    );
};

/* Exports */

export default Home;
