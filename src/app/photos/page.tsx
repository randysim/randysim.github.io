'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

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
            <div key={i} className="w-full">
                <Image
                    src={`/photos/compressed_${i}.jpg`}
                    alt={`photo-${i}`}
                    width={500}
                    height={500}
                    quality={75}
                    className="rounded-lg object-cover w-full"
                    onLoadingComplete={() => {
                        // set loading to false on first image load
                        if (loading) {
                            setLoading(false);
                        }
                    }}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI/wM6hgbIjgAAAABJRU5ErkJggg=="
                />
            </div>
        );
    }

    return (
        <div className="w-full p-5">
            {loading && (
                <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
                    <p className="w-1/3 text-center text-white">This may take a few seconds, please do not close this page.</p>
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
