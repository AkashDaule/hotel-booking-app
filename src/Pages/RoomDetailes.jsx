import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../Components/StarRating'

const RoomDetailes = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const room = roomsDummyData.find(room => room._id === id)
    room && setRoom(room)
    room && setMainImage(room.images[0])
  }, [])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* Room Details */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
          {room.hotel.name}
          <span className='font-inner text-sm'> ({room.roomType})</span>
        </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
      </div>

      {/* Room Ratings */}
      <div className='flex items-center gap-1 mt-2'>
        <StarRating />
        <p className='ml-2'>200+ reviews</p>
      </div>

      {/* Room Address */}
      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt="location-icon" />
        <span>{room.hotel.address}</span>
      </div>

      {/* Room Images */}
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div>
          <img src={mainImage} alt="Room Image" className='w-full rounded-xl shadow-lg object-cover' />
        </div>

        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images.length > 1 && room.images.map((images, index) => (
            <img
              onClick={() => setMainImage(images)}
              key={index}
              src={images}
              alt='Room Image'
              className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === images ? 'outline outline-3 outline-orange-500' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Room Highlights */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
          <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
            {room.amenities.map((item, index) => (
              <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                <p className='text-xs'>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Room Price */}
        <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
      </div>

      {/* Check-In Check-Out Form */}
      <form className='flex flex-col mb-6 md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_20px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
          <div className='flex flex-col'>
            <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
            <input className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required type="date" id="checkInDate" placeholder='Check-In' />
          </div>

          <div className='w-px h-12 bg-gray-300/70 max-md:hidden'></div>

          <div className='flex flex-col'>
            <label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
            <input className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required type="date" id="checkOutDate" placeholder='Check-Out' />
          </div>

          <div className='w-px h-12 bg-gray-300/70 max-md:hidden'></div>

          <div className='flex flex-col'>
            <label htmlFor="guests" className='font-medium'>Guests</label>
            <input className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required type="number" id="guests" placeholder='0' />
          </div>
        </div>

        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white rounded-md w-full md:w-auto mt-6 md:mt-0 py-3 px-20 text-base font-semibold'>
          Check Availability
        </button>
      </form>

      {/* Common Specification */}
      <div className='mt-25 space-y-4'>
        {roomCommonData.map((spec, index) => (
          <div key={index} className='flex items-start gap-2'>
            <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
            <div>
              <p className='text-base'>{spec.title}</p>
              <p className='text-gray-500'>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className='max-w-3xl border-y border-gray-300 my-20 py-10 text-gray-500'>
        <p>
          Guests will be allocated on the ground floor according to availability. You get a comfortable two-bedroom apartment with a true city feeling.
          The price quoted is for two guests, so please mark the number of guests to get the exact price for groups. Guests will be allocated ground floor
          according to availability.
        </p>
      </div>

      {/* Hosted By */}
      <div className='flex items-start gap-4 mt-10'>
        <img src={room.hotel.owner.image} alt="Host" className='h-14 w-14 md:h-18 md:w-18 rounded-full' />
        <div>
          <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
          <div className='flex items-center mt-1'>
            <StarRating />
            <p className='ml-2'>200+ reviews</p>
          </div>
        </div>

      
      </div>
      <button className='px-6 py-2.5 mt-6 rounded text-white bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer'>
  Contact Now
</button>
    </div>
  )
}

export default RoomDetailes
