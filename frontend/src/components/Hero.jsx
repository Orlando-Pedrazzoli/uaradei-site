import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  const desktopBanners = [
    assets.banner_uaradei,
    assets.banner_uaradei2,
    assets.banner_uaradei3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % desktopBanners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Banner Desktop (carrossel) */}
      <div className='relative w-full h-[70vh] md:h-[90vh] overflow-hidden hidden sm:block'>
        {desktopBanners.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Banner Mobile (estático) */}
      <div className='block sm:hidden w-full'>
        <img
          src={assets.banner_uaradei_mobile}
          alt='Banner Mobile'
          className='w-full h-auto object-contain'
        />
      </div>
    </>
  );
};

export default Hero;
