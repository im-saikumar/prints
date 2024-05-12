import { deleteIcon } from "@/app/ui/Button";
import { PreviewImage } from "../heroimage/heroimage";
import { WeddingCardType } from "@/app/lib/schemas/weddincardSchema";

export async function CardList({
  cardlist,
  model,
}: {
  cardlist: Array<WeddingCardType>;
  model: (id: string) => void;
}) {
  const data = await cardlist;
  return (
    <div>
      {data.length > 0 &&
        data.map((e, i) => (
          <section
            key={i}
            className="flex h-20 w-auto bg-blue-200 my-3 py-5 pr-2 jusifty-center items-center rounded"
          >
            <div className="flex h-20 w-80 bg-blue-200 my-3 py-5 pr-2 jusifty-center items-center rounded">
              <div className="flex flex-col h-20 w-20 p-2">
                <PreviewImage image={e.thumbnailUrl as string} />
              </div>
              {e.title}
            </div>
            <div onClick={() => model(e._id as string)} className="flex pr-2">
              {deleteIcon}
            </div>
          </section>
        ))}
    </div>
  );
}
