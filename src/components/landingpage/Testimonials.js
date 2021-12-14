import React from 'react';

// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="container">
                <div className="content">
                    <div>
                        <h3 className="mb-10">Testimonials</h3>
                        <h2>Vores kunder siger</h2>
                    </div>
                    <div>
                        <img src={`../img/trustpilot_icon.svg`} alt="" />
                    </div>
                </div>
                <div className="testimonial_slider mt-30">
                    {/* <TestimonialSlider /> */}
                </div>
            </div>
        </section>
    );
}

// function TestimonialSlider() {

//     return (
//         // <Splide options={{
//         //     rewind: true,
//         //     perPage: 3,
//         //     gap: '3rem',
//         // }}>
//         //     <SplideSlide>
//         //         <div className="testimonial_slide">
//         //             <h2 className="mb-20">"Tak for den smukkeste kop, med et meget fint stykke håndværk.
//         //                 Den levede helt klart op til mine forventninger, og jeg glæder mig
//         //                 til at give gaven væk i julegave."</h2>
//         //             <h3 className="mt-40 mb-20">Birgitte Jørgensen</h3>
//         //         </div>
//         //     </SplideSlide>
//         //     <SplideSlide>
//         //         <div className="testimonial_slide">
//         //             <h2 className="mb-20">"Tak for den smukkeste kop, med et meget fint stykke håndværk.
//         //                 Den levede helt klart op til mine forventninger, og jeg glæder mig
//         //                 til at give gaven væk i julegave."</h2>
//         //             <h3 className="mt-40 mb-20">Birgitte Jørgensen</h3>
//         //         </div>
//         //     </SplideSlide>
//         //     <SplideSlide>
//         //         <div className="testimonial_slide">
//         //             <h2 className="mb-20">"Tak for den smukkeste kop, med et meget fint stykke håndværk.
//         //                 Den levede helt klart op til mine forventninger, og jeg glæder mig
//         //                 til at give gaven væk i julegave."</h2>
//         //             <h3 className="mt-40 mb-20">Birgitte Jørgensen</h3>
//         //         </div>
//         //     </SplideSlide>
//         //     <SplideSlide>
//         //         <div className="testimonial_slide">
//         //             <h2 className="mb-20">"Tak for den smukkeste kop, med et meget fint stykke håndværk.
//         //                 Den levede helt klart op til mine forventninger, og jeg glæder mig
//         //                 til at give gaven væk i julegave."</h2>
//         //             <h3 className="mt-40 mb-20">Birgitte Jørgensen</h3>
//         //         </div>
//         //     </SplideSlide>
//         // </Splide>
//     // );
// // }