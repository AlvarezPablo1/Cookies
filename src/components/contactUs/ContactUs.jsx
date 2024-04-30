const ContactUs = () => {
  return (
    <div id="contact" className="relative">
      <div className=" flex flex-col gap-y-5 text-center py-14">
        <section>
          <p className="text-[26px] font-[Barlow-900]">10% OFF FIRST ORDER</p>
          <p className="text-[15px] md:text-[24px] ">Here’s a treat for you ;) Subscribe and enjoy <span className="font-[Barlow-700]">10% off</span> your first order.</p>
        </section>
        <section className="flex flex-col md:flex-row gap-5 items-center text-center justify-center">
        <input type="text" placeholder="Email" className="py-[18px] md:w-[370px] px-5 text-black"/>
        <button className="py-[5px] md:py-[10px] px-[24px] md:px-[64px] font-[Barlow-700] rounded-[4px] text-[26px] border">SEND</button>
        </section>
      </div>
    </div>
  )
}
export default ContactUs