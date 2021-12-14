import React, { useEffect } from "react";
import Hero from "./Hero";
import Intro from "./Intro";
import ProductList from "./ProductList";
import Designer from "./Designer";
import Testimonials from "./Testimonials";
import Categories from "./Categories";
import Info from "./Info";
import Newsletter from "./Newsletter";

export default function Landingpage({ products, onAdd, onRemove, setHeaderLight }) {

    useEffect(() => {
        setHeaderLight(true)
    })

    return (
        <>
            <Hero />
            <ProductList products={products} onAdd={onAdd} onRemove={onRemove} />
            <Intro />
            <Designer />
            {/* <Categories /> */}
            {/* <Info /> */}
            {/* <Testimonials /> */}
            <Newsletter />
        </>
    );
}