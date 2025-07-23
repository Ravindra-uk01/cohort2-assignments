import React from 'react'

const Grid = () => {
  return (
    <div>
        <div className='p-2 grid  grid-cols-3 border-2 gap-10' >
            <div className='p-2 col-span-2 border-2 border-red-500'>Item 1</div>
            <div className='p-2 row-span-2 border-2 border-yellow-500'>Item 2</div>
            <div className='p-2 border-2 border-blue-500'>Item 3</div>
            <div className='p-2 border-2 border-purple-500'>Item 4</div>
            <div className='p-2 border-2 border-green-500'>Item 5</div>
            <div className='p-2 border-2 border-orange-500'>Item 6</div>
        </div>
    </div>
  )
}

export default Grid