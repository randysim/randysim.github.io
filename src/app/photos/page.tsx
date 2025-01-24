'use client'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ResponsiveMasonry = dynamic(() => import('react-responsive-masonry').then((mod) => mod.ResponsiveMasonry), {
  ssr: false,
});

const Masonry = dynamic(() => import('react-responsive-masonry').then((mod) => mod.default), {
  ssr: false,
});

export default function Photos() {
    const [loading, setLoading] = useState(true);
    let photos = 33;

    let photoArray = [];
    for (let i = 1; i <= photos; i++) {
        photoArray.push(
            <LazyLoadImage
                src={`/photos/${i}.jpg?w=500&q=75`}
                alt={`photo-${i}`}
                effect="blur"
                className="rounded-lg object-cover w-full"
                key={i}
                afterLoad={() => setLoading(false)}
                placeholder={<div className="animate-pulse bg-gray-300 h-64 w-full rounded-lg"></div>}
            />
        );
    }

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full p-5">
            {loading && (
                <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
                    <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
                </div>
            )}
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry gutter="16px">
                    {photoArray}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
}
