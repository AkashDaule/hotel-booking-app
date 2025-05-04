import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      className="w-72 bg-white rounded-lg shadow-md overflow-hidden text-sm hover:shadow-lg transition-all relative"
    >
      {/* Bestseller Badge (1st and 3rd card) */}
      {(index === 0 || index === 2) && (
        <span className="absolute top-3 left-3 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-gray-300">
          Bestseller
        </span>
      )}

      <img
        src={room.images[0]}
        alt="Hotel"
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <p className="font-semibold text-lg text-gray-800 truncate">
          {room.hotel.name}
        </p>
        <p className="text-gray-600 text-sm truncate">
          {room.hotel.address}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-gray-800 font-medium text-base">
            ${room.pricePerNight}/night
          </span>
          <div className="flex items-center gap-1 text-sm">
            <img src={assets.starIconFilled} alt="star" className="w-4 h-4" />
            4.5
          </div>
        </div>

        {/* Book Now Button */}
        <button
          className="w-full mt-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition"
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          Book Now
        </button>
      </div>
    </Link>
  )
}

export default HotelCard
