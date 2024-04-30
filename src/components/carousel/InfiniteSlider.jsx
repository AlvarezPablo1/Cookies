import Image from "next/image"
import benziga from '../../../public/brands/benzinga.png'
import forbes from '../../../public/brands/Forbes.png'
import leafly from '../../../public/brands/Leafly.png'
import LosAngelesTimes from '../../../public/brands/LosAngelesTimes.png'
import RollingStones from '../../../public/brands/RollingStone.png'
import Variety from '../../../public/brands/Variety.png'

const InfiniteSlider = () => {
  return (
    <div className="slider">
        <div className="slide-track">
            <div className="slide">
              <Image src={benziga} alt="brand" width={100}/>
            </div>
            <div className="slide">
              <Image src={forbes} alt="brand" width={100}/>
            </div>
            <div className="slide">
              <Image src={leafly} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={LosAngelesTimes} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={RollingStones} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={Variety} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={benziga} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={forbes} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={leafly} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={LosAngelesTimes} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={RollingStones} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={Variety} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={benziga} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={forbes} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={leafly} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={LosAngelesTimes} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={RollingStones} alt="brand"width={100}/>
            </div>
            <div className="slide">
              <Image src={Variety} alt="brand"width={100}/>
            </div>
        </div>
    </div>

  )
}
export default InfiniteSlider