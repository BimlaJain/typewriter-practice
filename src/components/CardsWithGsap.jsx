import { useEffect } from 'react';
import { gsap} from 'gsap';

export default function Home() {
    useEffect(() => {
        const alice = document.querySelectorAll('.exampleElement');

        // Reset initial state and animate with gsap.fromTo for better control
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
        <div className="flex flex-col items-center min-h-screen bg-purple-300 py-10">
            <h2 className="text-white text-2xl mb-5">
                GSAP Stagger Animation
            </h2>

            <div className="flex justify-center gap-4 w-full max-w-md h-48">
                <img className="exampleElement w-24 h-auto rounded-lg shadow-lg" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/234228/drinkmebottle.gif" alt="Alice" />
                <img className="exampleElement w-24 h-auto rounded-lg shadow-lg" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/234228/drinkmebottle.gif" alt="Alice" />
                <img className="exampleElement w-24 h-auto rounded-lg shadow-lg" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/234228/drinkmebottle.gif" alt="Alice" />
                <img className="exampleElement w-24 h-auto rounded-lg shadow-lg" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/234228/drinkmebottle.gif" alt="Alice" />
                <img className="exampleElement w-24 h-auto rounded-lg shadow-lg" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/234228/drinkmebottle.gif" alt="Alice" />
            </div>
        </div>
    );
}
