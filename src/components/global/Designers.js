import { useEffect } from 'react';
import HeroSmall from '../ecommerce/HeroSmall';
import Newsletter from '../landingpage/Newsletter';

const Designers = ({ heroTitle, setHeroTitle, setHeaderLight, setBasketModalOn, setIsMobileMenuOpen }) => {

    useEffect(() => {
        setHeroTitle("Designere");
        setHeaderLight(true);
        setBasketModalOn(true);
    })

    return (
        <>
            <HeroSmall heroTitle={heroTitle} />
            <section id="designers">
                <div className="container">
                    <h2>Populære brands</h2>
                    <div className="popular_brands">
                        <div className="brand">
                            <div className="brand_img">
                                <img src={`../img/brand_1.svg`} className="mb-20" />
                            </div>
                            <h3>Marinski Heartmades</h3>
                        </div>
                        <div className="brand">
                            <div className="brand_img">
                                <img src={`../img/brand_2.svg`} className="mb-20" />
                            </div>
                            <h3>Priip Ceramics</h3>
                        </div>
                        <div className="brand">
                            <div className="brand_img">
                                <img src={`../img/brand_3.svg`} className="mb-20" />
                            </div>
                            <h3>Made a Mano</h3>
                        </div>
                        <div className="brand">
                            <div className="brand_img">
                                <img src={`../img/brand_4.svg`} className="mb-20" />
                            </div>
                            <h3>Tasja P Ceramics</h3>
                        </div>
                        <div className="brand">
                            <div className="brand_img">
                                <img src={`../img/brand_5.svg`} className="mb-20" />
                            </div>
                            <h3>Lars Rank</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="alphabet container">
                        <div className="subheading_container pt-30 pb-30">
                            <h3 className="fs-13">Oversigt over alle keramikere</h3>
                        </div>
                        <div className="alphabet_container mb-40">
                            <div className="mt-40">
                                <h2>A</h2>
                                <p>Ann-Louise Roman</p>
                            </div>
                            <div className="mt-40">
                                <h2>B</h2>
                                <p>Blacksmith Ceramics</p>
                            </div>
                            <div className="mt-40">
                                <h2>C</h2>
                                <p>Christian Bruun</p>
                            </div>
                            <div className="mt-40">
                                <h2>D</h2>
                                <p>Ditte Fischer</p>
                            </div>
                        </div>
                        <div className="alphabet_container mb-40">
                            <div className="mt-40">
                                <h2>E</h2>
                                <p>Esther Pedersen</p>
                            </div>
                            <div className="mt-40">
                                <h2>F</h2>
                                <p>Feinedinge</p>
                            </div>
                            <div className="mt-40">
                                <h2>H</h2>
                                <p>Hanne Bertelsen</p>
                                <p>Helle Grej</p>
                                <p>Henriette Duckert</p>
                                <p>Helle Gram</p>
                                <p>Helle Vestergaard</p>
                                <p>Helle Hansen</p>
                                <p>Hejdesign</p>
                                <p>Helene Søs Schjødts</p>
                            </div>
                            <div className="mt-40">
                                <h2>J</h2>
                                <p>Jeanette Hiiri</p>
                                <p>Julie Damhus Handmade</p>
                            </div>
                        </div>
                        <div className="alphabet_container mb-40">
                            <div className="mt-40">
                                <h2>K</h2>
                                <p>Kim Wallace</p>
                            </div>
                            <div className="mt-40">
                                <h2>L</h2>
                                <p>Lars Rank</p>
                                <p>Line Rønnest</p>
                            </div>
                            <div className="mt-40">
                                <h2>M</h2>
                                <p>Made a Mano</p>
                                <p>Marinski Heartmades</p>
                            </div>
                            <div className="mt-40">
                                <h2>O</h2>
                                <p>Oh Oak</p>
                            </div>
                        </div>
                        <div className="alphabet_container mb-40">
                            <div className="mt-40">
                                <h2>M</h2>
                                <p>Made a Mano</p>
                                <p>Marinski Heartmades</p>
                            </div>
                            <div className="mt-40">
                                <h2>P</h2>
                                <p>Paper Boat Press</p>
                                <p>Priip</p>
                            </div>
                            <div className="mt-40">
                                <h2>S</h2>
                                <p>Silje Bartolj</p>
                            </div>
                            <div className="mt-40">
                                <h2>T</h2>
                                <p>Tascha P Ceramics</p>
                                <p>Tina Marie Cph Handmade</p>
                            </div>
                        </div>
                        <div className="alphabet_container mb-40">
                            <div className="mt-40">
                                <h2>U</h2>
                                <p>Unika K Design</p>
                            </div>
                            <div className="mt-40">
                                <h2>W</h2>
                                <p>Wauw design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Newsletter />
        </>
    )
}

export default Designers;