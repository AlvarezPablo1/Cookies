import Image from 'next/image'
import logo from '../../public/logo.png'
import Button from './Button'

const Header = () => {
  return (
    <div className="bg-[#121212] relative z-50 py-4 border-b-2 flex flex-col-reverse md:flex-row gap-y-5  justify-around items-center">
      <section>
        <Image src={logo} alt='logo'/>
      </section>
      <section className='text-[12px] md:text-[16px] lg:text-[23px] font-[Barlow-800]'> 
        <p>LET IT GROW WITH AUTHENTIC <span className='text-[#0EA5E9] underline '>COOKIES ORIGINALS!</span></p>
      </section>
      <section className='hidden md:block'>
        <Button text={"SHOP NOW"}/>
      </section>
    </div>
  )
}
export default Header