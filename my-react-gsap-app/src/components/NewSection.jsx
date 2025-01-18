import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const NewSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const animation = gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <div ref={sectionRef} className="new-section p-8 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-teal-400">Welcome to the New Section</h2>
            <p className="mt-4 text-white">
                This section is animated using GSAP. You can add more content here as needed.
            </p>
        </div>
    );
};

export default NewSection;