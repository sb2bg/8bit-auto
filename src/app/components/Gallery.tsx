import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <>
      <div className="">
        <div className="p-6 container mx-auto">
          <div className="py-2">
            <h1 className="text-center text-4xl"></h1>
          </div>
          <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {images.map((x, i) => {
              return (
                <Fragment key={i}>
                  <div className="relative mb-4 ">
                    <Image
                      width={400}
                      height={400}
                      className="max-h-80  w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                      src={x}
                      alt="A car image"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20  group-hover:bg-opacity-40 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <Link href="/gallery"></Link>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
