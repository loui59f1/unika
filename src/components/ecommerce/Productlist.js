import { useEffect, useState } from "react";
import SingleProduct from './SingleProduct'
import Filter from './Filter'
import Sorting from './Sorting'
import HeroSmall from "./HeroSmall";

import { Link } from 'react-router-dom';

const Productlist = ({ products, onAdd, onRemove, heroTitle, setHeroTitle, setHeaderLight, setBasketModalOn, setIsMobileMenuOpen }) => {
    const designers = [
        {
            name: `Tasja P Ceramics`
        },
        {
            name: `Ditte Fischer`
        },
        {
            name: `Ann-Louise Roman`
        },
        {
            name: `Marinski Heartmades`
        },
        {
            name: `Made a Mano`
        },
        {
            name: `Unika K Design`
        },
        {
            name: `Helle Grej`
        }
    ]

    const categories = [
        { name: 'Kopper' },
        { name: 'Tallerkener' },
        { name: 'Julepynt' },
        { name: 'Keramik' },
    ]
    // SORTERING
    const [sortSelected, setSortSelected] = useState('popular');
    const [sortedProducts, setSortedProducts] = useState([]);

    // FILTREREDE PRODUKTER
    const [filteredProducts, setFilteredProducts] = useState([]);

    // CHECKED BRANDS - Array of names
    const [checkedBrands, setCheckedBrands] = useState([]);
    const [checkedCategories, setCheckedCategories] = useState([]);

    // CHECK STATE - Click on checkbox
    const [designerChecked, setDesignerChecked] = useState(
        new Array(designers.length).fill(false)
    );
    const [categoryChecked, setCategoryChecked] = useState(
        new Array(categories.length).fill(false)
    );

    useEffect(() => {
        setHeroTitle("Produkter");
        setHeaderLight(true);
        setBasketModalOn(true);
    })

    useEffect(() => {
        const checkedYes = designerState.filter((item) => item.checked === true);
        const brandNames = checkedYes.map((brand) => {
            return brand.name;
        })
        setCheckedBrands(brandNames);
    }, [designerChecked]);

    useEffect(() => {
        const checkedYes = categoryState.filter((item) => item.checked === true);
        const categoryNames = checkedYes.map((brand) => {
            return brand.category;
        })
        setCheckedCategories(categoryNames);

    }, [categoryChecked]);

    useEffect(() => {
        if (filteredProducts.length === 0) {
            setSortedProducts(products.sort((a, b) => a[sortSelected].localeCompare(b[sortSelected])));
            setFilteredProducts(products.sort((a, b) => a[sortSelected].localeCompare(b[sortSelected])));
        } else {
            setFilteredProducts(products.sort((a, b) => a[sortSelected].localeCompare(b[sortSelected])));
            setFilteredProducts(filteredProducts.sort((a, b) => a[sortSelected].localeCompare(b[sortSelected])));
        }
    }, [sortSelected]);

    console.log(sortedProducts)

    useEffect(() => {

        // setFilteredProducts(products.sort((a, b) => a[sortSelected].localeCompare(b[sortSelected])))

        if (checkedCategories.length > 0 & checkedBrands.length === 0) {
            setFilteredProducts(products.filter((product) => checkedCategories.includes(product.category)));
        } else if (checkedCategories.length === 0 & checkedBrands.length > 0) {
            setFilteredProducts(products.filter((product) => checkedBrands.includes(product.brand)));
        } else if (checkedCategories.length === 1 & checkedBrands.length === 1) {
            setFilteredProducts(products.filter((product) => product.category.includes(checkedCategories) & checkedBrands.includes(product.brand)));
        } else if (checkedCategories.length > 1 & checkedBrands.length === 1) {
            const filteredBrand = products.filter((product) => product.brand === checkedBrands[0]);
            setFilteredProducts(filteredBrand.filter((product) => checkedCategories.includes(product.category)));
        } else if (checkedCategories.length === 1 & checkedBrands.length > 1) {
            setFilteredProducts(products.filter((product) => checkedBrands.includes(product.brand) & product.category === checkedCategories[0]));
        } else if (checkedCategories.length > 1 & checkedBrands.length > 1) {
            setFilteredProducts(products.filter((product) => checkedBrands.includes(product.brand) & checkedCategories.includes(product.category)));
        } else if (filteredProducts.length < 1) {
        } else {
            setFilteredProducts([]);
        }

    }, [checkedCategories, checkedBrands, sortSelected]);

    const designerState = designerChecked.map((data, index) => {
        const brandIndex = index;
        const brandName = designers.filter(({ name }, index) => index === brandIndex);
        const name = brandName[0].name;

        return { checked: data, name }
    });

    const categoryState = categoryChecked.map((data, index) => {
        const categoryIndex = index;
        const categoryName = categories.filter(({ category }, index) => index === categoryIndex);
        const category = categoryName[0].name;

        return { checked: data, category }
    });

    const handleDesignerChange = (position) => {
        const updatedCheckedState = designerChecked.map((item, index) => {
            if (index === position) {
                return !item;
            } else {
                return item;
            }
        });
        setDesignerChecked(updatedCheckedState);
    };

    const handleCategoryChange = (position) => {
        const updatedCheckedState = categoryChecked.map((item, index) => {
            if (index === position) {
                return !item;
            } else {
                return item;
            }
        });
        setCategoryChecked(updatedCheckedState);
    };

    function handleSortChange(e) {
        setSortSelected(e.target.value);
    };

    return (
        <>
            <HeroSmall heroTitle={heroTitle} />
            <section id="productlist">
                <div className="container">
                    <Sorting handleSortChange={handleSortChange} sortSelected={sortSelected} />
                    <div className="sidebar_grid">
                        <Filter handleDesignerChange={handleDesignerChange} handleCategoryChange={handleCategoryChange} designers={designers} categories={categories} products={products} designerChecked={designerChecked} categoryChecked={categoryChecked} />
                        <div className="product_list bg-pink-200">
                            {/* {products.filter(product => selectedCategory === "All" || product.brand === selectedCategory).map((product, index) => (
                            <Link to={`/product/id=${product.id}`} className="single_product" key={index} >
                                <SingleProduct product={product} onAdd={onAdd} onRemove={onRemove} />
                            </Link>
                        ))} */}
                            {/* {filteredProducts.length > 1 && filteredProducts.map((product, index) => (
                            <Link to={`/product/id=${product.id}`} className="single_product" key={index} >
                                <SingleProduct product={product} onAdd={onAdd} onRemove={onRemove} />
                            </Link>
                        ))} */}
                            {filteredProducts.length < 1 && products.map((product, index) => (
                                <Link to={`/product/id=${product.id}`} className="single_product" key={index} >
                                    <SingleProduct product={product} onAdd={onAdd} onRemove={onRemove} />
                                </Link>
                            ))}
                            {filteredProducts.length > 1 && filteredProducts.map((product, index) => (
                                <Link to={`/product/id=${product.id}`} className="single_product" key={index} >
                                    <SingleProduct product={product} onAdd={onAdd} onRemove={onRemove} className="relative" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Productlist;