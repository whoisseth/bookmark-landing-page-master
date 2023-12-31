import Image from 'next/image'
import bookmark from '@/app/images/logo-bookmark.svg'
import bookmarkWhite from '@/app/images/logo-bookmarkwhite.svg'
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
import Browsers from './components/Browsers'
import Faqs from './components/Faqs'


export default function Home() {
  return (
<div className="flex flex-col  items-center w-full h-screen">

<div className="flex flex-col gap-10 sm:px-20 py-6 w-full px-2">
<div className="flex justify-between w-full items-center ">
   
   <Image src={bookmark} alt={''} width={130} height={130} className=''/>
 <div className="gap-4 items-center sm:flex hidden ">
   <p className=" hover:text-red-500">FEATURES</p>
   <p className=" hover:text-red-500">PRICING</p>
   <p className=" hover:text-red-500">CONTACT</p>
   <button className='bg-red-500 px-4 py-2 text-white rounded-md hover:bg-white hover:text-red-500 hover:border-red-500 hover:border'>LOGIN</button>
 </div>

</div>

<div className="flex items-center sm:flex-row flex-col-reverse justify-between w-full">
 <div className="flex flex-col gap-5 sm:w-[50%] sm:pr-20">
   <h4 className='font-bold text-5xl text-center sm:text-start'>A Simple Bookmark Manager</h4>
   <p className="text-center sm:text-start pr-4">
     A clean and simple interface to orgnize your favourite website. Open a new browser tab and see your site load instantly. Try it for free.
   </p>
   <div className="flex  gap-2 items-center justify-center">
     <button className='rounded-sm p-2 text-white  hover:text-blue-500 hover:ring-1 hover:ring-blue-400  bg-blue-500 hover:bg-white'>Get it on Chrome</button>
     <button className='rounded-sm p-2 hover:ring-1 hover:ring-gray-500 hover:text-gray-500 bg-gray-100 shadow-md '>Get it on Firefox</button>
   </div>
 </div>
 <Image src={heroImage} alt={''} width={450} height={450} className=' '/>
</div>
<div className="flex flex-col items-center gap-8">
<div className="flex-col gap-6 w-full">
<p className="font-bold text-center text-3xl"> Features</p>
<p className="text-center sm:px-80 w-full ">Our aim is to make it quick and easy for to access your favourite website. Your bookmarks sync between your devices so you can access them on the go.</p>
</div>
<div className="flex border-b gap-14 sm:flex-row flex-col items-center w-full">
<p className="hover:border-b-2 border-transparent hover:border-b-red-500 hover:text-red-500"> Simple Bookmarking</p>
<p className="hover:border-b-2 hover:border-b-red-500 hover:text-red-500"> Speedy Searching</p>
<p className="hover:border-b-2 hover:border-b-red-500 hover:text-red-500"> Easy Sharing</p>
</div>

<div className="flex justify-between sm:flex-row flex-col items-center">
<Image src={featureTab1} alt={''}/>
<div className="flex flex-col sm:w-[50%] sm:pl-32 gap-6 w-full items-center">
 <p className="font-bold text-center">Bookmark in one click</p>
 <p className=" text-center">Organize your bookmarks however you like. Our simple drag-and-drop interface give you complete control over how you manage your favorite sites.</p>
 <button className='bg-blue-500 text-white rounded-md p-2 w-40'>More Info</button>
</div>
</div>
</div>
<div className="flex flex-col items-center w-full">
<p className="font-bold sm:text-3xl text-2xl ">
 Download the extension
</p>
<p className="w-full sm:w-[450px] text-center w-full sm:px-20">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize</p>
</div>
<div className=" flex justify-between w-full  items-center
sm:flex-row flex-col">
<Browsers image={logoChrome} name={"Add to Chrome"} version={'Minimum version 62'} className={'mt-0'}/>
<Browsers image={logoFirefox} name={"Add to Firefox"} version={'Minimum version 55'} className={'mt-20'}/>
<Browsers image={logoOpera} name={"Add to Opera"} version={'Minimum version 46'} className={'mt-40'}/>

</div>
<div className="flex flex-col items-center gap-5 w-full sm:px-80Ffeature
">
<div className="flex flex-col items-center gap-5w-full">
 <p className="font-bold text-3xl text-center">Frequently Asked Questions</p>
 <p className=" text-center sm:w-[500px] w-full">Here are some of our FAQs. If you have any other questions you'd like answere please feel free to email us.</p>
</div>
<div className="flex flex-col gap-5 w-full sm:px-44">
<Faqs question={'Whate is Bookmarks?'}/>
<Faqs question={'How can I '}/>
<Faqs question={'Is there a mobile app?'}/>
<Faqs question={'What about other Chromium browsers? '}/>
</div>
<button className='p-2 bg-blue-500 w-36 text-center rounded-md text-white'>More Info
</button>
</div>

</div>
<div className="flex flex-col bg-blue-500 sm:mt-5  py-16 w-full text-white items-center gap-4 ">
  <p className="">35,000+ ALREADY JOINED</p>
  <p className=" font-bold text-3xl sm:w-[400px] text-center ">Stay up-to-date with what we're doing</p>
  <div className="flex gap-4 sm:flex-row flex-col">
    <input type="text" placeholder='Enter your email address' className='rounded-md p-2'/>
    <button className='p-2 bg-red-500 rounded-md'>Contact Us</button>
  </div>
</div>
<div className=" sm:px-10 py-4 bg-blue-950 justify-between items-center w-full flex sm:flex-row flex-col">
    <div className="flex gap-8 sm:flex-row flex-col items-center ">
 <Image src={bookmarkWhite} alt={''} />
 <div className="flex gap-4 text-white sm:flex-row flex-col">
 <p className="hover:text-red-500">FEATURE</p>
  <p className="hover:text-red-500">PRICING</p>
  <p className="hover:text-red-500">CONTACT</p>
 </div>
    </div>
    <div className="flex gap-4">
    <Image src={iconFacebook} alt={''}/>
    <Image src={iconTwitter} alt={''}/>

    </div>
</div>
</div>
  )
}
