import React from 'react';
import Title from './Title';
import { testimonials } from '../assets/assets';
import StarRating from './StarRating';

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-32'>
      <Title 
        title="What Our Guests Say" 
        subTitle="Discover why discerning travelers consistently choose Quickstay for their exclusive and luxurious accommodations around the world." 
      />

      {/* All cards in one row */}
      <div className="flex flex-row justify-center flex-wrap gap-8 mt-20 w-full">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-white p-6 rounded-2xl shadow-lg w-[350px] h-[220px] flex flex-row items-start gap-4"
          >
            {/* Image */}
            <img 
              className="w-16 h-16 rounded-full object-cover mt-1" 
              src={testimonial.image} 
              alt={testimonial.name} 
            />

            {/* Text Content */}
            <div className="flex flex-col">
              <p className="font-playfair text-lg">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.address}</p>

              <div className="flex items-center gap-1 mt-2">
                <StarRating />
              </div>

              <p className="text-gray-600 mt-2 text-sm leading-snug line-clamp-4">
                "{testimonial.review}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
