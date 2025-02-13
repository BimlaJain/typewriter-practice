import React, { useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { gsap } from 'gsap';

const DeveloperSection = () => {
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);

    useEffect(() => {
        const leftAnimation = gsap.fromTo(
            leftSectionRef.current.children,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.out',
                clearProps: 'all', 
            }
        );

        const rightAnimation = gsap.fromTo(
            rightSectionRef.current,
            { opacity: 0, x: 100 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: 'power3.out',
                delay: 0.5,
                clearProps: 'all', 
            }
        );

        return () => {
            leftAnimation.kill();
            rightAnimation.kill();
        };
    }, []);

    const codeSnippet = `const stripe = require('stripe')('sk_test_...');
await stripe.paymentIntents.create({
  amount: 2000,
  currency: 'usd'
});`;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col lg:flex-row items-center px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-blue-500/5 blur-3xl opacity-30 pointer-events-none"></div>
            <div ref={leftSectionRef} className="w-full lg:w-1/2 space-y-6 z-10">
                <h1 className="text-teal-400 font-medium max-lg:pt-10">Designed for developers</h1>
                <h2 className="text-4xl lg:text-5xl font-bold">
                    Ship more quickly with powerful and easy-to-use APIs
                </h2>
                <p className="text-gray-400 leading-relaxed">
                    Save engineering time with unified payments functionality. We obsess
                    over the maze of gateways, payments rails, and financial institutions
                    that make up the global economic landscape so that your teams can
                    build what you need on one platform.
                </p>
                <button className="bg-teal-500 text-white group font-semibold py-3 px-6 rounded-md relative overflow-hidden transition-all duration-300">
                    <span className="absolute inset-0 bg-teal-400 group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out"></span>
                    <span className="relative z-10">
                        Read the docs
                        <span className="inline-block ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                            &rarr;
                        </span>
                    </span>
                </button>
            </div>
            <div ref={rightSectionRef} className="w-full lg:w-1/2 flex justify-center z-10 max-lg:pt-10">
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg w-full max-w-md relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/10 blur-xl opacity-75 -z-10"></div>
                    <div className="text-gray-200 text-sm">
                        <span className="text-white">
                            <Typewriter
                                words={[codeSnippet]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={50}
                                deleteSpeed={25}
                                delaySpeed={3000}
                            />
                        </span>
                    </div>
                    <div className="text-teal-400 mt-4">NORMAL</div>
                    <div className="text-gray-500">server.js</div>
                </div>
            </div>
        </div>
    );
};
export default DeveloperSection;
// "use client"
// import React, { useEffect } from 'react'
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const GsapPractice = () => {

//     useEffect(() => {
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: '.this-section',
//                 start: 'top top',
//                 end: 'bottom top',
//                 markers: true,
//                 scrub: 3,
//                 pin: true

//             }
//         })

//         tl.to('.box', {
//             xPercent: 100,
//             rotate: 360,
//             duration: 2
//         })

//         gsap.to('.boxTwo', {
//             rotate: 360,
//             repeat: -1,
//             duration: 2,
//             yoyo: true
//         })

//         gsap.fromTo('.text', {
//             opacity: 0,
//             x: -100
//         },
//             {
//                 opacity: 1,
//                 x: 0,
//                 stagger: 1
//             }
//         )
//     })
//     useEffect(() => {
//         gsap.to('.circle', {
//             rotate: 360,
//             xPercent: 1000,
//             repeat: -1,
//             yoyo: true,
//             duration: 3
//         })
//         gsap.fromTo('.text1', {
//             opacity: 0,
//             x: -100
//         }, {
//             opacity: 1,
//             x: 0,
//             stagger: 1
//         })
//     })
//     return (
//         <>
//             <div className='min-h-screen flex justify-center items-center'><div className='flex flex-col '>
//                 <a className='text' href="/">Lorem ipsum dolor sit amet.</a>
//                 <a className='text' href="/">name</a>
//                 <a className='text' href="/">name</a>
//                 <a className='text' href="/">name</a>
//                 <a className='text' href="/">name</a>
//             </div>
//             </div>
//             <div className='this-section min-h-screen bg-white flex justify-center items-center'>
//                 <div className='box size-96 bg-black'></div>
//                 <div className='boxTwo size-96 bg-blue-500'></div>

//             </div>
//             <div className='flex items-center min-h-screen'>
//                 <div className='circle size-24 rounded-lg bg-red-600'></div>
//             </div>
//             <div className='min-h-screen text-center'>
//                 <div className='text1'>Lorem ipsum dolor sit.</div>
//                 <div className='text1'>Lorem ipsum dolor sit.</div>
//                 <div className='text1'>Lorem ipsum dolor sit.</div>
//                 <div className='text1'>Lorem ipsum dolor sit.</div>
//                 <div className='text1'>Lorem ipsum dolor sit.</div>
//                 <div className='text1'>Lorem ipsum dolor sit.</div>
//             </div>
//         </>
//     )
// }

// export default GsapPractice
