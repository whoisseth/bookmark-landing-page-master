import Image from 'next/image'
import bookmark from '@/app/images/logo-bookmark.svg'
import heroImage from '@/app/images/illustration-hero.svg'
import featureTab1 from '@/app/images/illustration-features-tab-1.svg'
import featureTab2 from '@/app/images/illustration-features-tab-2.svg'
import featureTab3 from '@/app/images/illustration-features-tab-3.svg'
import logoChrome from '@/app/images/logo-chrome.svg'
import logoFirefox from '@/app/images/logo-firefox.svg'
import logoOpera from '@/app/images/logo-opera.svg'
import iconArrow from '@/app/images/icon-arrow.svg'
import iconClose from '@/app/images/icon-close.svg'
import iconError from '@/app/images/icon-error.svg'
import iconFacebook from '@/app/images/icon-facebook.svg'
import iconHamburger from '@/app/images/icon-hamburger.svg'
import iconTwitter from '@/app/images/icon-twitter.svg'

export default function Home() {
  return (
<div className="flex flex-col  p-20 items-center w-full h-screen gap-10">

  <div className="flex justify-between w-full items-center">
   
      <Image src={bookmark} alt={''} width={130} height={130} className=''/>
    <div className="flex gap-2 items-center sm:flex hidden">
      <p className="">FEATURES</p>
      <p className="">PRICING</p>
      <p className="">CONTACT</p>
      <button>LOGIN</button>
    </div>

  </div>

  <div className="flex items-center sm:flex-row flex-col justify-between">
    <div className="flex flex-col gap-5 w-[50%] pr-24">
      <h4 className='font-bold text-3xl'>A Simple Bookmark Manager</h4>
      <p className="">
        A clean and simple interface to orgnize your favourite website. Open a new browser tab and see your site load instantly. Try it for free.
      </p>
      <div className="flex  gap-3">
        <button className='rounded-sm p-2 text-white  hover:text-blue-500 hover:ring-1 hover:ring-blue-400  bg-blue-500 hover:bg-white'>Get it on Chrome</button>
        <button className='rounded-sm p-2 hover:ring-1 hover:ring-gray-500 hover:text-gray-500 bg-gray-100 shadow-md '>Get it on Firefox</button>
      </div>
    </div>
    <Image src={heroImage} alt={''} width={450} height={450} className=' '/>
  </div>
<div className="flex flex-col items-center gap-8">
<div className="flex-col gap-6">
  <p className="font-bold text-center"> Features</p>
  <p className="text-center px-80">Our aim is to make it quick and easy for to access your favourite website. Your bookmarks sync between your devices so you can access them on the go.</p>
</div>
<div className="flex border-b gap-14 ">
<p className="hover:border-b-2 hover:border-b-red-500 hover:text-red-500"> Simple Bookmarking</p>
<p className="hover:border-b-2 hover:border-b-red-500 hover:text-red-500"> Speedy Searching</p>
<p className="hover:border-b-2 hover:border-b-red-500 hover:text-red-500"> Easy Sharing</p>
</div>
</div>

</div>
  )
}
