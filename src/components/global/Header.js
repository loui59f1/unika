import { useEffect, useState, useRef } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = ({ basket, basketAmount, subtotal, total, onRemove, headerLight, basketModalOn, isModalOpen, setIsModalOpen, products, isMobileMenuOpen, setIsMobileMenuOpen }) => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });

    const headerRef = useRef(null);
    console.log(isMobileMenuOpen)


    const handleScroll = (elTopOffset, elHeight) => {
        if (window.pageYOffset > (elTopOffset + elHeight)) {
            setSticky({ isSticky: true, offset: elHeight });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }
    };

    useEffect(() => {
        var header = headerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
            handleScroll(header.top, header.height)
        }

        window.addEventListener('scroll', handleScrollEvent);

        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };

    }, []);

    const filterProduct = (products, query) => {
        if (!query) {
            return [];
        }

        return products.filter((product) => {
            const queryLowered = query.toLowerCase();
            const productName = product.title.toLowerCase();
            const productBrand = product.brand.toLowerCase();
            const productCategory = product.category.toLowerCase();

            return productName.includes(queryLowered) | productCategory.includes(queryLowered) | productBrand.includes(queryLowered);
        });
    };

    const searchFilteredProducts = filterProduct(products, searchQuery);

    return (
        <header className="transparent" style={{ marginTop: sticky.offset }}>
            <div className={`top_bar ${sticky.isSticky ? 'top_bar_sticky' : ''}`}>
                <ul className="tb_left">
                    <li>Flag</li>
                    <li>DA/DKK</li>
                    <li>Gratis fragt over 499 DKK</li>
                    <li>Byt til 1. marts 2022</li>
                </ul>
                <ul className="tb_right">
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/contact">Kontakt os</Link></li>
                    <li><Link to="/about">Om os</Link></li>
                </ul>
            </div>
            <div className={`header_inner navbar${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
                {/* <div className="search_dropdown">
                    <div className="select_container">
                        <Select
                            options={aquaticCreatures}
                            isMulti
                            onChange={opt => console.log(opt)}
                        />
                    </div>
                </div> */}
                <nav>
                    <div className="desktop_menu">
                        <div className="top_nav">
                            <Link to="/">
                                <div className="logo">
                                    {headerLight && !sticky.isSticky &&
                                        < img src={`../img/logo_unika.svg`} />
                                    }
                                    {headerLight && sticky.isSticky &&
                                        < img src={`../img/logo_unika_dark.svg`} />
                                    }
                                    {/* {headerLight && !sticky &&
                                        < img src={`../img/logo_unika.svg`} />
                                    } */}
                                    {!headerLight && sticky.isSticky &&
                                        < img src={`../img/logo_unika_dark.svg`} />
                                    }
                                    {!headerLight && !sticky.isSticky &&
                                        < img src={`../img/logo_unika_dark.svg`} />
                                    }
                                </div>
                            </Link>
                            <Search headerLight={headerLight} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                            <div className={`profile_header ${headerLight === true ? "light_header" : "dark_header"}`}>
                                <span className="profile_icon"></span>
                            </div>
                            {basketModalOn && !sticky.isSticky &&
                                <div className={`basket_header ${headerLight === true ? "light_header" : "dark_header"}`} onMouseEnter={() => setIsModalOpen(true)}>
                                    <Link to="/basket">
                                        <span className="basket_icon">
                                            {basket.length > 0 &&
                                                <div className="color_badge">
                                                </div>
                                            }
                                        </span>
                                    </Link>
                                </div>
                            }
                            {basketModalOn && sticky.isSticky &&
                                <div className={`basket_header ${headerLight === true ? "light_header" : "dark_header"}`}>
                                    <Link to="/basket">
                                        <span className="basket_icon">
                                            {basket.length > 0 &&
                                                <div className="color_badge">
                                                </div>
                                            }
                                        </span>
                                    </Link>
                                </div>
                            }
                            {!basketModalOn &&
                                <div className={`basket_header ${headerLight === true ? "light_header" : "dark_header"}`}>
                                    <span className="basket_icon"></span>
                                </div>
                            }
                        </div>
                        <div className="bottom_nav">
                            <div className={`${headerLight === true ? "light_header" : "dark_header"}`}>
                                <ul className="categories">
                                    <Link to="/productlist"><li>Kopper</li></Link>
                                    <Link to="/productlist"><li>Vaser</li></Link>
                                    <Link to="/productlist"><li>Service</li></Link>
                                    <Link to="/productlist"><li>Julepynt</li></Link>
                                    <Link to="/productlist"><li>Kander</li></Link>
                                    <Link to="/productlist"><li>Sale</li></Link>
                                </ul>
                                <ul className="links">
                                    <Link to="/productlist"><li>Alle produkter</li></Link>
                                    <Link to="/designers"><li>Designere</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mobile_navigation">
                        <div className="nav_container">
                            <Link to="/">
                                <div className="logo">
                                    {headerLight &&
                                        <img src={`../img/logo_unika.svg`} />
                                    }
                                    {!headerLight &&
                                        <img src={`../img/logo_unika_dark.svg`} />
                                    }
                                </div>
                            </Link>
                            <div className={`mobile_icon_container ${headerLight === true ? "light_header" : "dark_header"}`}>
                                <span className="menu_icon" onClick={() => setIsMobileMenuOpen(true)}></span>
                            </div>
                            <div>
                                <div className={`basket_header ${headerLight === true ? "light_header" : "dark_header"}`}>
                                    <Link to="/basket">
                                        <span className="basket_icon">
                                            {basket.length > 0 &&
                                                <div className="color_badge">
                                                </div>
                                            }
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav >
            </div >
            {/* {searchQuery &&
                <div className="search_results_container">
                    <ul className="search_dropdown">
                        {searchFilteredProducts.map((product, index) => (
                            <li key={index}>
                                <Link to={`/product/id=${product.id}`} >
                                    <h2>{product.title}</h2>
                                    <h3>{product.brand}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            } */}
            {isMobileMenuOpen &&
                <div className="mobile_menu_list">
                    <div className="close_container" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <span></span>
                    </div>
                    <div className="mobile_inner">
                        <div className="logo">
                            <img src={`../img/logo_unika_dark.svg`} />
                        </div>
                        <ul className="categories">
                            <li><Link to="/productlist">Kopper</Link></li>
                            <li><Link to="/productlist">Vaser</Link></li>
                            <li><Link to="/productlist">Service</Link></li>
                            <li><Link to="/productlist">Julepynt</Link></li>
                            <li><Link to="/productlist">Kander</Link></li>
                            <li><Link to="/productlist">Sale</Link></li>
                        </ul>
                        <ul className="links">
                            <li><Link to="/productlist">Alle produkter</Link></li>
                            <li><Link to="/designers">Designere</Link></li>
                        </ul>
                        <ul className="links">
                            <li><Link to="/about">Om Unika K</Link></li>
                            <li><Link to="/contact">Kontakt os</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </div>
                </div>
            }
            {
                isModalOpen &&
                <>
                    <div className="basket_modal" onMouseOver={() => setIsModalOpen(true)} onMouseLeave={() => setIsModalOpen(false)}>
                        <div className="modal_inner">
                            {basketAmount > 0 &&
                                <div>
                                    <div className="basket_modal_header">
                                        <h3>Indkøbskurv</h3>
                                        {basketAmount > 1 &&
                                            <h3 className="fs-13">{basketAmount} varer</h3>
                                        }
                                        {basketAmount === 1 &&
                                            <h3 className="fs-13">{basketAmount} vare</h3>
                                        }
                                    </div>
                                    <hr className="mt-20 mb-20"></hr>
                                    {basket.map((product) => (
                                        <div className="basket_item">
                                            <div className="remove_container">
                                                <span className="remove_icon" onClick={() => onRemove(product)}></span>
                                            </div>
                                            <div className="item_image">
                                                <img src={`../img/${product.firstImage}`} alt={product.title} />
                                            </div>
                                            <div className="item_content">
                                                <h3>{product.title}</h3>
                                                <p className="fs-13">{product.amount} stk</p>
                                            </div>
                                        </div>
                                    ))}
                                    <hr className="mt-20 mb-20"></hr>
                                    <div className="mt-20">
                                        <div className="order_info">
                                            <p className="not_total">Subtotal</p>
                                            <p className="price">{subtotal},00 kr.</p>
                                        </div>
                                        <div className="order_info">
                                            <p className="not_total">Levering</p>
                                            <p className="price">39,00 kr.</p>
                                        </div>
                                        <div className="order_info total">
                                            <p className="total">Total: </p>
                                            <p className="price">{total},00 kr.</p>
                                        </div>
                                    </div>
                                    <div className="basket_modal_btn mt-20">
                                        <Link to="/basket"><button className="btn btn_secondary btn_inverse">Se kurv</button></Link>
                                        <Link to="/checkout"><button className="btn btn_primary m-none">Checkout</button></Link>
                                    </div>
                                </div>
                            }
                            {basketAmount === 0 &&
                                <div className="empty_basket">
                                    <h3>Indkøbskurven er tom</h3>
                                </div>
                            }
                        </div>
                    </div>
                </>
            }
        </header >
    );
}


export default Header;