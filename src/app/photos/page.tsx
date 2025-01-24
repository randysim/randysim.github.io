'use client'
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
    let photos = 33;

    let photoArray = [];
    for (let i = 1; i <= photos; i++) {
        photoArray.push(
            <LazyLoadImage
                src={`/photos/${i}.jpg`}
                alt={`photo-${i}`}
                effect="blur"
                className="rounded-lg object-cover w-full"
                key={i}
            />
        );
    }

    return (
        <div className="w-full p-5">
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry gutter="16px">
                    {photoArray}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
}