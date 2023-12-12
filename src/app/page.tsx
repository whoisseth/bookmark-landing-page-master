import Image from 'next/image'
import bookmark from '@/app/images/logo-bookmark.svg'

export default function Home() {
  return (
<div className="flex flex-col  p-20 items-center w-full h-screen">

  <div className="flex justify-between w-full items-center">
   
      <Image src={bookmark} alt={''} width={130} height={130} className=''/>
    <div className="flex gap-2 items-center">
      <p className="">FEATURES</p>
      <p className="">PRICING</p>
      <p className="">CONTACT</p>
      <button>LOGIN</button>
    </div>

  </div>

</div>
  )
}
