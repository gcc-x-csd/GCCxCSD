import { RankHolderInfo } from '@/components'
import React from 'react'


const RankersList = ({ rank_holders }) => {
  return (
    <div className='lg:w-[960px] m-auto'>
     <table className='border-collapse w-full'>
        <thead>
          <tr className='text-white bg-black text-xl'>
            <th className='p-2 sm:py-2 py-4 border text-left border-gray-500'>YEAR</th>
            <th className='p-2 sm:py-2 py-4 border text-left border-gray-500'>NAME</th>
            <th className='p-2 sm:py-2 py-4 border text-left border-gray-500'>RANK</th>
          </tr>
        </thead>
        <tbody>

{/*       ADD NEW RANK HOLDER HERE!       */}

{rank_holders.length >= 5 && (
  <>
  <RankHolderInfo name={rank_holders[rank_holders.length-1].name} rank={rank_holders[rank_holders.length-1].rank} year={rank_holders[rank_holders.length-1].year} />
  <RankHolderInfo name={rank_holders[rank_holders.length-2].name} rank={rank_holders[rank_holders.length-2].rank} year={rank_holders[rank_holders.length-2].year} />
  <RankHolderInfo name={rank_holders[rank_holders.length-3].name} rank={rank_holders[rank_holders.length-3].rank} year={rank_holders[rank_holders.length-3].year} />
  <RankHolderInfo name={rank_holders[rank_holders.length-4].name} rank={rank_holders[rank_holders.length-4].rank} year={rank_holders[rank_holders.length-4].year} />
  <RankHolderInfo name={rank_holders[rank_holders.length-5].name} rank={rank_holders[rank_holders.length-5].rank} year={rank_holders[rank_holders.length-5].year} />
  </>
)}

{rank_holders.length == 4 && (
  <>
  <RankHolderInfo name={rank_holders[rank_holders.length-1].name} rank={rank_holders[rank_holders.length-1].rank} year={rank_holders[rank_holders.length-1].year} />
  <RankHolderInfo name={rank_holders[rank_holders.length-2].name} rank={rank_holders[rank_holders.length-2].rank} year={rank_holders[rank_holders.length-2].year} />
  <RankHolderInfo name={rank_holders[rank_holders.length-3].name} rank={rank_holders[rank_holders.length-3].rank} year={rank_holders[rank_holders.length-3].year} />
  <RankHolderInfo name={rank_holders[rank_holders.length-4].name} rank={rank_holders[rank_holders.length-4].rank} year={rank_holders[rank_holders.length-4].year} />
  </>
)}

{rank_holders.length == 3 && (
  <>
  <RankHolderInfo name={rank_holders[rank_holders.length-1].name} rank={rank_holders[rank_holders.length-1].rank} year={rank_holders[rank_holders.length-1].year} />
  <RankHolderInfo name={rank_holders[rank_holders.length-2].name} rank={rank_holders[rank_holders.length-2].rank} year={rank_holders[rank_holders.length-2].year} />
  <RankHolderInfo name={rank_holders[rank_holders.length-3].name} rank={rank_holders[rank_holders.length-3].rank} year={rank_holders[rank_holders.length-3].year} />
  </>
)}

{rank_holders.length == 2 && (
  <>
  <RankHolderInfo name={rank_holders[rank_holders.length-1].name} rank={rank_holders[rank_holders.length-1].rank} year={rank_holders[rank_holders.length-1].year} />
  <RankHolderInfo name={rank_holders[rank_holders.length-2].name} rank={rank_holders[rank_holders.length-2].rank} year={rank_holders[rank_holders.length-2].year} />
  </>
)}
{rank_holders.length == 1 && (
  <>
  <RankHolderInfo name={rank_holders[rank_holders.length-1].name} rank={rank_holders[rank_holders.length-1].rank} year={rank_holders[rank_holders.length-1].year} />
  </>
)}

        </tbody>
     </table>  
    </div>
  )
}





export default RankersList
