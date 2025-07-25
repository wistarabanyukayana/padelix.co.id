import { ProductProps } from "@/types";
import { getContentList } from "@/data/loaders";

import { Pagination } from "@/components/tools/Pagination";
import { Search } from "@/components/tools/Search";
import { cn } from "@/lib/utils";

interface ContentListProps {
  headline: string;
  query?: string;
  path: string;
  featured?: boolean;
  component: React.ComponentType<
    ProductProps & {
      basePath: string;
      showSpecification?: boolean;
      className?: string;
      itemImageClassName?: string;
    }
  >;
  headlineAlignment?: "center" | "right" | "left";
  showSearch?: boolean;
  page?: string;
  showPagination?: boolean;
  showSpecification?: boolean;
  itemClassName?: string;
  itemImageClassName?: string;
  className?: string;
}

async function loader(
  path: string,
  featured?: boolean,
  query?: string,
  page?: string
) {
  const { data, meta } = await getContentList(path, featured, query, page);
  return {
    products: (data as ProductProps[]) || [],
    pageCount: meta?.pagination?.pageCount || 1,
  };
}

export async function ProductContentList({
  headline,
  path,
  featured,
  component,
  headlineAlignment,
  showSearch,
  query,
  page,
  showPagination,
  showSpecification = true,
  itemClassName,
  itemImageClassName,
  className,
}: Readonly<ContentListProps>) {
  const { products, pageCount } = await loader(path, featured, query, page);
  console.log(products);
  const Component = component;
  return (
    <section className={cn("section", className)}>
      <h3 className={`h3 w-full ${`text-${headlineAlignment}`}`}>
        {headline || "Featured Articles"}
      </h3>
      {showSearch && <Search />}
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 p-4 h-full">
        {products.map((product) => (
          <Component
            key={product.documentId}
            {...product}
            showSpecification={showSpecification}
            basePath={path}
            className={itemClassName}
            itemImageClassName={itemImageClassName}
          />
        ))}
      </div>
      {showPagination && <Pagination pageCount={pageCount} />}
    </section>
  );
}
