
import Home from "@/components/Home/Home";
import ProductPage from "@/components/ProductDetails/ProductDetails";
import PopularCategories from "@/app/popularCategory/page";
import PopularProductCard from "@/app/popularProduct/page";

export default function page() {
  return (
    <div>
      <Home />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
      <ProductPage></ProductPage>
      <PopularCategories></PopularCategories>
      <PopularProductCard></PopularProductCard>
    </div>
  );
}
