'use client'
import dynamic from 'next/dynamic';

const ResponsiveMasonry = dynamic(() => import('react-responsive-masonry').then((mod) => mod.ResponsiveMasonry), {
  ssr: false,
});

const Masonry = dynamic(() => import('react-responsive-masonry').then((mod) => mod.default), {
  ssr: false,
});

export default function Photos() {
    let photos = 9;

    let photoArray = [];
    for (let i = 1; i <= photos; i++) {
        photoArray.push(
            <img 
                src={`/photos/${i}.jpg`} 
                alt={`photo-${i}`} 
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