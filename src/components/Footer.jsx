import Image from 'next/image'
import logo from '../../public/logo.png'
import twitter from '../../public/media/twitter.png'
import linkedin from '../../public/media/linkedin.png'
import tiktok from '../../public/media/tiktok.png'
import facebook from '../../public/media/facebook.webp'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-black py-10">
      <section className='flex flex-col md:flex-row items-center justify-between gap-y-5 md:px-20'>
        <Image src={logo} alt='logo'/>
        <section className='flex items-center gap-x-14'>
        <Link href={"https://twitter.com/cookiesglobal"} target='_blank'>
          <Image src={twitter} alt='social' className='cursor-pointer'/>
        </Link>
        <Link href={"https://www.linkedin.com/company/cookiescalifornia/"} target='_blank'>
          <Image src={linkedin} alt='social' className='cursor-pointer'/>
        </Link>
        <Link href={"https://www.tiktok.com/@cookiesenterprises?_t=8YtIU627udq&_r=1"} target='_blank'>
          <Image src={tiktok} alt='social' className='cursor-pointer'/>
        </Link>
        <Link href={"https://www.facebook.com/CookiesEnterprises/"} target='_blank'>
          <Image src={facebook} alt='social' className='cursor-pointer' width={22} height={22}/>
        </Link>
        </section>
      </section>
      <section className='flex flex-col justify-center items-center text-center'>
        <p className='mb-10 mt-8 font-[Barlow-500]'>For customer support send an email to <span className='text-[#0FA5E9] cursor-pointer'>seeds@cookies.com</span></p>
        <p className='font-[Barlow-500] text-[14px]'>COPYRIGHT © · COOKIES SEED BANK. ALL RIGHTS RESERVED.</p>
        <section className='w-[300px] text-[12px] md:text-[14px] md:w-[600px] lg:w-[890px]'>
          <p >This product is not for use by or sale to persons under the age of 18. This product should be used only as directed on the label. It should not be used if you are pregnant or nursing. Consult with a physician before use if you have a serious medical condition or use prescription medications. 
          A doctor’s advice should be sought before using any hemp products. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. These statements have not been evaluated by the FDA.</p>
          <p>This product is not intended to diagnose, treat, cure or prevent any disease. By using this site you agree to follow the Privacy Policy and all Terms & Conditions printed on this site. All products contain less than 0.3% Cannabinoid-compliant with applicable Federal Laws. 
          Please make yourself aware of any and all applicable laws regarding hemp in your jurisdiction. Cookies Seed Bank accepts no liability or responsibility regarding germination laws in any specific locale state or national jurisdictions.</p>
        </section>
      </section>
      <section className='flex mt-10 justify-center items-center text-[6px] md:text-[15px] gap-x-5 text-[#0FA5E9]'>
        <p className='cursor-pointer'>Privacy</p>
        <p className='cursor-pointer'> Disclaimer</p>
        <p className='cursor-pointer'> Shipping Policy</p>
        <p className='cursor-pointer'> Return Policy</p>
        <p className='cursor-pointer'> Refund Policy</p>
        <p className='cursor-pointer'> Terms & Conditions</p>
      </section>
    </div>
  )
}
export default Footer