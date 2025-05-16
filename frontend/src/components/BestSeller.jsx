import React from 'react';
import Title from './Title';

const BestSeller = () => {
  const youtubeVideos = [
    'https://www.youtube.com/embed/3NYR3ZxjVBY?si=rNaYRfr4VUMCklOO',
    'https://www.youtube.com/embed/PX868AJ02tI?si=a0hSlfgGUX3TzGAH',
    'https://www.youtube.com/embed/8vlW4L_g_HU?si=l4ewZ_bhuqxi0BEO',
    'https://www.youtube.com/embed/DJBJbne7vFE?si=S7B4dm6lVFRza4Nn',
    'https://www.youtube.com/embed/bBqJtPJtbUI?si=OJFmCjn5C_pn7w9O',
    'https://www.youtube.com/embed/dlpi_Ddd50s?si=5ZCTqsVn6oZa5t-a',
  ];

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'EPISÓDIOS MAIS'} text2={'RECENTES'} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        {youtubeVideos.map((videoUrl, index) => (
          <div key={index} className='w-full aspect-video'>
            <iframe
              src={videoUrl}
              title={`YouTube video ${index + 1}`}
              className='w-full h-full rounded-md'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
