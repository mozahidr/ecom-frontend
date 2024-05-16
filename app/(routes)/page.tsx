import getBillboard, { getAllBillboards } from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import BillboardList from "@/components/billboards";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("3727e7c1-8b34-4b8e-8ba9-ac48dbbb6ef5");
  const billboards = await getAllBillboards();
  const product = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        {/* <BillboardList data={billboards} /> */}
        <div className="flex flex-col gap-y-8 px-4 lg:px-8">
          <ProductList title="Featured Products" items={product} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
