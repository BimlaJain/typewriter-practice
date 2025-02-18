import { useEffect } from 'react';
import { gsap} from 'gsap';

export default function Home() {
    useEffect(() => {
        const alice = document.querySelectorAll('.alice');
        gsap.fromTo(
            alice,
            { rotation: 0, opacity: 0, y: 50 },
            {
                rotation: (index) => [0, 20, 40, -20, -40][index],
                opacity: 1,
                y: 0,
                repeat:-1,
                delay: 0.1, 
                stagger: 1.5,
            }
        );
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-purple-300 py-10">
            <h2 className="text-white md:text-6xl text-center text-4xl mb-20">
                GSAP Stagger Animation
            </h2>

            <div className="flex justify-center gap-4 w-full max-w-md h-48">
                <img className="alice md:w-24 w-16 h-auto rounded-lg shadow-lg" src="../assets/images/gif/girl.gif" alt="Alice" />
                <img className="alice md:w-24 w-16 h-auto rounded-lg shadow-lg" src="../assets/images/gif/girl.gif" alt="Alice" />
                <img className="alice md:w-24 w-16 h-auto rounded-lg shadow-lg" src="../assets/images/gif/girl.gif" alt="Alice" />
                <img className="alice md:w-24 w-16 h-auto rounded-lg shadow-lg" src="../assets/images/gif/girl.gif" alt="Alice" />
                <img className="alice md:w-24 w-16 h-auto rounded-lg shadow-lg" src="../assets/images/gif/girl.gif" alt="Alice" />
            </div>
        </div>
    );
}
