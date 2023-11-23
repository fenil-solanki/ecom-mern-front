import Arrival from "./component/Arrival";
import BannerSlider from "./component/BannerSlider";
import BetterFashion from "./component/BetterFashion";
import Feedback from "./component/Feedback";
import InLimeLight from "./component/InLimeLight";
import MansCategory from "./component/MansCategory";
import Offer from "./component/Offer";
import SavingZone from "./component/SavingZone";
import TopBrands from "./component/TopBrands";
import WomansCategory from "./component/WomansCategory";

const Home=()=>{
  
  return(
    <>
<BannerSlider></BannerSlider>
<Offer></Offer>
<Arrival></Arrival>
{/* <SavingZone></SavingZone> */}
<BetterFashion></BetterFashion>
<MansCategory></MansCategory>
<WomansCategory></WomansCategory>
<TopBrands></TopBrands>
<InLimeLight></InLimeLight>
<Feedback></Feedback>
    </>

  )
}

export default Home;