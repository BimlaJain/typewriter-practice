import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TypeWriterPractice = () => {
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);

    useEffect(() => {
        const leftAnimation = gsap.fromTo(
            leftSectionRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: 'power3.out',
                delay: 0.5,
                clearProps: 'all',
            }
        );

        const rightAnimation = gsap.fromTo(
            rightSectionRef.current,
            { opacity: 0, x: 50 },
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
                <h4 className="text-teal-400 font-medium">Designed for developers</h4>
                <h1 className="text-4xl lg:text-5xl font-bold">
                    Ship more quickly with powerful and easy-to-use APIs
                </h1>
                <pre className="bg-gray-800 p-4 rounded">
                    <code>{codeSnippet}</code>
                </pre>
            </div>
            <div ref={rightSectionRef} className="w-full lg:w-1/2 space-y-6 z-10">
                {/* Additional content can go here */}
            </div>
        </div>
    );
};

export default TypeWriterPractice;