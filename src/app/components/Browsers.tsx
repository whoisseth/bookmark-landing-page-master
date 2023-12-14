import React from 'react'

import dots from '@/app/images/bg-dots.svg'

import Image from 'next/image'

type BrawserType = {
  image:string
  name:string
  version: string
  className: string
}

export default function Browsers( props:BrawserType) {
  return (
    <div className={`flex flex-col shadow-lg gap-3 items-center py-8 rounded-md ${props.className}`}>
        
        
    <Image src={props.image} alt={''}/>
    <p className="font-bold ">{props.name}</p>
    <p className="">{props.version}</p>
    <Image src={dots} alt={''}/>
    <button className='p-4 text-white  rounded-md bg-blue-500 text-center'>Add & install Extension</button>

    </div>
  )
}
 