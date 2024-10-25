import Category from "./category/page";
import Discount from "./discount/page";
import Footer from "./footer/page";
import Hero from "./hero/page";
import Navbar from "./navbar/page";
import Product from "./product/page";
import ShopNow from "./shopnow/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
       <Category/>
       <Product/>
      <ShopNow />
      <Discount />
      <Footer /> 
      
    </div>
  );
}
