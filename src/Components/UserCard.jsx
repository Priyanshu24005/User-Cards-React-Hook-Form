import React from 'react'

const UserCard = ({user,setToggle , handleDelete ,ind ,setUpdatedData}) => {
  return (
    <div className='w-72 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200'>
      <img
        src={user.image}
        alt=""
        className='w-full h-48 object-cover'
      />

      <div className='p-5'>
        <div className='space-y-1'>
          <p className='text-xl font-bold text-gray-800 truncate'>
            {user.name}
          </p>

          <p className='text-sm text-gray-500 break-all'>
            {user.email}
          </p>

          <p className='text-gray-700 font-medium'>
            📞 {user.contact}
          </p>
        </div>

        <div className='flex justify-between mt-5'>
          <button className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition cursor-pointer' onClick={() => {
            setUpdatedData(user);
            setToggle((prev) => !prev);
          }}>
            Update
          </button>

          <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition cursor-pointer' onClick={() => handleDelete(ind)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserCard