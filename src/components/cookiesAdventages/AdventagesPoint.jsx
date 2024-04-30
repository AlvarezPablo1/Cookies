import Image from "next/image"
import card from '../../../public/vectores/vector-card.png'
import check from '../../../public/vectores/vector-check.png'
import medal from '../../../public/vectores/vector-medal.png'
import seed from '../../../public/vectores/vector-seed.png'

const AdventagesPoint = () => {
  return (
    <div className="grid grid-cols-2  pt-14 gap-14">
      <section className="flex gap-x-5 items-center">
        <Image src={check} alt="icon"/>
        <p>FEDERALLY LEGAL</p>
      </section>
      <section className="flex gap-x-5 items-center">
        <Image src={seed} alt="icon"/>
        <p>HIGH-QUALITY GENETICS</p>
      </section>
      <section className="flex gap-x-5 items-center">
        <Image src={medal} alt="icon"/>
        <p>INNOVATIVE STRAINS</p>
      </section>
      <section className="flex gap-x-5 items-center">
        <Image src={card} alt="icon"/>
        <p>ALL CREDIT CARDS ACCEPTED</p>
      </section>
    </div>
  )
}
export default AdventagesPoint