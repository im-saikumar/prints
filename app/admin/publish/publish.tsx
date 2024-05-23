import { Circle, checkIcon } from "@/app/ui/Button";
import React, { Key, useState } from "react";
import { ListImage } from "../heroimage/heroimage";
import { WeddingCardType } from "@/app/lib/schemas/weddincardSchema";
import { Props } from "@/app/exports/types";

const Publish = ({ data, refetch }: Props) => {
  const [isPublish, setIsPublish] = useState<String>(
    data.isPublished ? "on" : "off"
  );

  async function updateCard(id: string): Promise<void> {
    const publish = isPublish === "on" ? "true" : "false";
    try {
      const response = await fetch(
        `/lib/api/products?id=${id}&publish=${publish}`,
        {
          method: "PUT",
          cache: "no-store",
        }
      );
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
      await refetch();
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="bg-white h-20 lg:w-1/2 md:w-2/3 sm:w-full rounded border-dashed border-2 border-gray-400 my-2">
      <div className="flex items-center justify-between h-full py-2 px-3">
        <div className="h-full w-50 gap-2 flex items-center justify-center">
          <div className="flex" style={{ height: "55px", width: "55px" }}>
            <ListImage image={data.thumbnailUrl as string} />
          </div>
          <div className="mx-2">
            <p className="md:text-xl sm:text-xs font-semibold">{data.title}</p>
          </div>
        </div>
        <div className="h-full w-30 gap-2 flex items-center justify-center">
          <select
            name="publish"
            id="cards"
            value={isPublish as string}
            onChange={(e) => setIsPublish(e.target.value)}
            className="border-gray-500  h-8 block w-full my-1 rounded-md border-0 px-2 ring-1 ring-gray-300"
            required
          >
            <option value="on">Publish</option>
            <option value="off">Unpublish</option>
          </select>
          <div onClick={() => updateCard(data._id as string)} className="mx-2">
            <Circle>{checkIcon}</Circle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publish;
