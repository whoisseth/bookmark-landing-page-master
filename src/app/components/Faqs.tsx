import React from 'react'
import Image from 'next/image';
import iconArrow from '@/app/images/icon-arrow.svg';

type FaqType = {
question: string
}

export default function Faqs(props: FaqType) {
  return (
    <div className='flex flex-col w-full'>
        <hr className="w-full" />
       <div className=" flex justify-between items-center w-full">
          <p className="">{props.question}</p>     
          <Image src={iconArrow} alt={''}/>
        </div>
    </div>
  )
}