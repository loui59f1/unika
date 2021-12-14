import React, { useEffect } from "react";
import HeroSmall from "../ecommerce/HeroSmall";

const About = ({ heroTitle, setHeroTitle, setHeaderLight }) => {
    useEffect(() => {
        setHeroTitle("Om Unika K");
        setHeaderLight(true);
    })

    return (
        <>
            <HeroSmall heroTitle={heroTitle} />
            <section id="about" className="relative">
                <div className="beige_bg"></div>
                <div className="container">
                    <div className="subheading_container">
                        <h3>Et unikt hjem</h3>
                    </div>
                    <div className="intro_grid">
                        <div className="intro_image">
                            <img src={`../img/intro_img.jpg`} alt="" />
                        </div>
                        <div className="intro_content">
                            <h2 className="mb-20">Personlighed til hverdagen</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <div className="btn_container mt-30">
                                <a href=""><button className="btn_small">Se udvalget</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="story" className="relative pb-100">
                <div className="designer_bg mt-40"></div>
                <div className="handmade_graphic">
                    <img src={`../img/handmade_graphic.svg`} />
                </div>
                <div className="container mt-30">
                    <div className="designer_grid">
                        <div className="text_content">
                            <h3 className="pink">Fra hobby til business<span className="vertical_line"></span></h3>
                            <h2>Historien bag Unika K</h2>
                            <p>Hos Unika K håndplukker vi keramik fra udvalgte designere, med en passion for håndværket. Bæredygtighed, høj kvalitet og smukt design er alle fællesnævnere for vores. Romans design er farverigt, friskt og altid opløftende at kigge på. Marinski Heartmades er bosat i Grækenland, og har et farverigt udtryk vi sjældent har set. Derfor er vi de eneste i DK der forhandler Marinski produkter.</p>
                            <p className="mt-20 mb-30">Se udvalget nedenfor og bliv forført at et farverigt og eksklusivt univers af produkter.</p>
                            <button className="btn btn_secondary btn_inverse">Se produkter</button>
                        </div>
                        <div className="designer_img">
                            <img src={`../img/marinski_img.jpg`}></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;