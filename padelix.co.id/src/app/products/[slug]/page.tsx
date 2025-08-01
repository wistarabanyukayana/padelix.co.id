import { SectionRenderer } from "@/components/general/SectionRenderer";
import { getProductList, getSlugProduct } from "@/data/loaders";
import { ProductProps } from "@/types";
import { notFound } from "next/navigation";

export const revalidate = false;
interface PageProps {
  params: Promise<{ slug: string }>;
}

async function fetchAllProductSlugs() {
  // The path should match your API route for products
  const { data } = await getProductList("/api/products");
  // data is ProductProps[]
  return (data as ProductProps[]).map((product) => ({
    slug: product.slug,
  }));
}

async function loadData(slug: string) {
  const {data} = await getSlugProduct(slug);

  console.log("This is the data", data);

  return data;
}

export async function generateStaticParams() {
  return await fetchAllProductSlugs();
}

export default async function SingleProductRoute({ params }: PageProps) {
  const slug = (await params).slug;

  const data = await loadData(slug);

  const product : ProductProps = data[0];

  if (!product) notFound();

  

  return <SectionRenderer sections={product?.sections} />;
}
