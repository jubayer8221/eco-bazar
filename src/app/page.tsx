import Home from "@/components/home/Home";
import ProductPage from "@/components/ProductDetails/ProductDetails";
import PopularCategories from "@/app/popularCategory/page";
import PopularProductCard from "@/app/popularProduct/page";
import Hotdeals from "@/components/home/Hotdeals";
import SalesBanner from "@/components/home/SalesBanner";
import HotdealsCart from "@/components/home/HotdealsCart";

export default function page() {
  return (
    <div>
      <Home />
      {/* <ProductPage></ProductPage> */}
      <PopularCategories></PopularCategories>
      <PopularProductCard></PopularProductCard>
      <Hotdeals></Hotdeals>
      <SalesBanner />
    </div>
  );
}
