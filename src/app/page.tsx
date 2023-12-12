import Image from 'next/image'
import bookmark from '@/app/images/logo-bookmark.svg'

export default function Home() {
  return (
<div className="flex flex-col  p-20 items-center w-full h-screen">

  <div className="flex justify-between w-full items-center">
   
      <Image src={bookmark} alt={''} width={130} height={130} className=''/>
    <div className="flex gap-2 items-center sm:flex hidden">
      <p className="">FEATURES</p>
      <p className="">PRICING</p>
      <p className="">CONTACT</p>
      <button>LOGIN</button>
    </div>

  </div>

  <div className="flex">
    <div className="flex flex-col ">
      <h4 className='font-bold text-3xl'>A Simple Bookmark Manager</h4>
      <p className="">
        A clean and simple interface to orgnize your favourite website. Open a new browser tab and see your site load instantly. Try it for free.
      </p>
      <div className="flex  gap-3">
        <button className='rounded-sm p-2 text-white  hover:text-blue-500 hover:ring-1 hover:ring-blue-400  bg-blue-500'>Get it on Chrome</button>
        <button className='rounded-sm p-2 hover:ring-1 hover:ring-gray-500 hover:text-gray-500 bg-gray-100 shadow-md '>Get it on Firefox</button>
      </div>
    </div>
    <Image src={''} alt={''}/>
  </div>

</div>
  )
}
