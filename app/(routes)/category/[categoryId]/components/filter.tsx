"use client";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import queryString from "query-string";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}
const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {

  const searchParams = useSearchParams();
  const router = useRouter();

  // get currently selected value
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    // current query
    const current = queryString.parse(searchParams.toString());

    // add the new filter to the current url
    const query = {
      ...current,
      [valueKey]: id,
    };

    // remove the current filter from the url
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
// create new URL
    const url = queryString.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === filter.id && "bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
