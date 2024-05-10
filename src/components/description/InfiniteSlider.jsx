import Image from "next/image"
import { brands } from "../premiumProduct/data"


const InfiniteSlider = () => {

  const tripleBrands = [...brands, ...brands, ...brands, ...brands];
  return (
    <div className="slider">
        <div className="slide-track">
              {
                tripleBrands.map((brand) => {
                  return (
                      <Image key={brand.id} src={brand.img} alt="brand" width={250} height={100}/>
                  )
                })
              }
        </div>
    </div>

  )
}
export default InfiniteSlider
