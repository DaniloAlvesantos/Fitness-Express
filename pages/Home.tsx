/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "./components/Header";
import Slider from "./components/slider/slider";
import Head from "next/head";
import Footer from "./components/Footer/index";
import HomeComponents from "./components/home";

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Home |fitnessExpress</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>
            <Header />
            <Slider />
            <HomeComponents />
            <Footer />
        </>
    );
};

export default Home;