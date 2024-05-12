import Loading from "@/app/explore/loading-in";
import Image from "next/image";

export function PreviewImage({ image }: { image: string }) {
  return (
    <Image
      alt="Mountains"
      className="object-cover rounded"
      // Importing an image will
      // automatically set the width and height
      src={image}
      sizes="20vw"
      height={100}
      width={100}
      quality={50}
      priority={true}
      // Make the image display full width
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
export async function HeroImage({ image }: { image: string }) {
  return (
    <Image
      alt="Mountains"
      className="object-cover rounded"
      // Importing an image will
      // automatically set the width and height
      src={image}
      sizes="90vw"
      height={100}
      width={100}
      quality={80}
      onLoad={Loading}
      // Make the image display full width
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
export async function cardImage({ image }: { image: string }) {
  return (
    <Image
      alt="Mountains"
      className="object-cover rounded"
      // Importing an image will
      // automatically set the width and height
      src={image}
      sizes="60vw"
      height={100}
      width={100}
      quality={80}
      // Make the image display full width
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
