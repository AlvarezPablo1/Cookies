import Image from "next/image"
import { brands } from "../premiumProduct/data"


const InfiniteSlider = () => {

  const tripleBrands = [...brands, ...brands, ...brands];
  return (
    <div className="slider">
        <div className="slide-track">
              {
                tripleBrands.map((brand) => {
                  return (
                    <div key={brand.id} className="slide">
                      <Image src={brand.img} alt="brand" width={100} height={100}/>
                    </div>
                  )
                })
              }
        </div>
    </div>

  )
}
export default InfiniteSlider