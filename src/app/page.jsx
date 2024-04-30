import ContactUs from "@/components/contactUs/ContactUs";
import Adventages from "@/components/cookiesAdventages/Adventages";
import Description from "@/components/description/Description";
import LimitedEdition from "@/components/limitedEdition/LimitedEdition";
import PremiumProduct from "@/components/premiumProduct/PremiumProduct";

export default function Home() {
  return (
    <main className="bg-[#121212]   ">
      <Description/>
      <PremiumProduct/>
      <LimitedEdition/>
      <Adventages/>
      <ContactUs/>
    </main>
  );
}
