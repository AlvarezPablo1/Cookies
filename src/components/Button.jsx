import Link from "next/link"

const Button = ({text, link}) => {
  return (
    <Link href={link} 
      className='bg-[#0EA5E9] py-[10px] px-[44px] rounded-[4px] font-[Barlow-700] shadow-md shadow-[#0ea4e99d] w-full md:w-auto'>{text}</Link>
  )
}
export default Button