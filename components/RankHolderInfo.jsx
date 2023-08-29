import React from 'react'

const RankHolderInfo = ({name, rank, year}) => {
  return (    
        <tr className='text-slate-400 text-md bg-black/40'>
              <td className='p-1 md:p-2 border border-gray-500'>{year}</td>
              <td className='p-1 md:p-2 border border-gray-500 font-semibold'>{name}</td>
              <td className='p-1 md:p-2 border border-gray-500'>{rank}</td>
        </tr>
  )
}

export default RankHolderInfo
