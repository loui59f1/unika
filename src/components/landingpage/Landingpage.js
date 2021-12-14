import { useEffect } from "react";
import Hero from "./Hero";
import Intro from "./Intro";
import ProductList from "./ProductList";
import Designer from "./Designer";
import Newsletter from "./Newsletter";

export default function Landingpage({ products, onAdd, onRemove, setHeaderLight }) {

    useEffect(() => {
        const setStates = async () => {
            setHeaderLight(true)
        };
        setStates();
    });

    return (
        <>
            <Hero />
            <ProductList products={products} onAdd={onAdd} onRemove={onRemove} />
            <Intro />
            <Designer />
            <Newsletter />
        </>
    );
}