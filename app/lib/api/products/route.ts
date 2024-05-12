import connectDb from "../../db";
import { WeddingCardType } from "../../schemas/weddincardSchema";
import WeddingCard from "../../schemas/weddincardSchema";
import { NextApiRequest, NextApiResponse } from "next";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

import {
  AWS_ACCESS_KEY_ID,
  AWS_S3_BUCKET_NAME,
  AWS_SECRET_ACCESS_KEY,
  S3_REGION,
} from "@/app/exports/exportfiles";
import AWS from "aws-sdk";

import { T } from "@/app/admin/upload/page";
import { NextResponse, NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { Data } from "aws-sdk/clients/firehose";

const post = WeddingCard;

const s3Client: Object | any = new S3Client({
  region: S3_REGION as string, // Replace with your S3 region
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID as string, // Replace with your credentials
    secretAccessKey: AWS_SECRET_ACCESS_KEY as string, // Replace with your credentials
  },
});

export async function GET(request: Request) {
  try {
    await connectDb();
    const weddingCardslist: WeddingCardType[] = await post
      .find(
        { isPublished: true },
        { imageUrl: 0, description: 0, __v: 0, createdAt: 0 }
      )
      .sort({ _id: -1 });
    return NextResponse.json(weddingCardslist);
    // return NextResponse.json(weddingCards);
  } catch (error) {
    console.error(error);
    return new NextResponse("Error fetching wedding cards" + error, {
      status: 500,
    });
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  const formData = await request.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  const category = formData.get("category");
  const price = formData.get("price");
  const thumbnailUrl = formData.get("thumbnailUrl") as File;
  const imageUrl = formData.getAll("imageUrl") as File[];
  try {
    await connectDb();
    let thumbnailPath: string | undefined;
    let imagesPath: String[] = [];

    if (thumbnailUrl?.size > 0) {
      if (!thumbnailUrl.type.startsWith("image/")) {
        console.error("Not an image file");
        return;
      }

      const buffer = (await thumbnailUrl.arrayBuffer()) as Buffer;
      // Build S3 upload parameters
      const { name, type } = thumbnailUrl;
      const params: any = new PutObjectCommand({
        Bucket: AWS_S3_BUCKET_NAME, // Replace with your bucket name
        Key: `thumbnails/${name}`, // Use original filename
        Body: buffer,
        ContentType: type,
        ACL: "public-read",
      });

      // Upload the file to S3
      await s3Client.send(params);
      const path = params.input.Key;
      thumbnailPath = `https://${AWS_S3_BUCKET_NAME}.s3.${S3_REGION}.amazonaws.com/${path}`;
    }

    for (const ddx in imageUrl) {
      if (imageUrl[ddx]?.size > 0) {
        if (!imageUrl[ddx].type.startsWith("image/")) {
          console.error("Not an image file");
          return;
        }

        const buffer = (await imageUrl[ddx].arrayBuffer()) as Buffer;
        // Build S3 upload parameters
        const { name, type } = imageUrl[ddx];
        const params: any = new PutObjectCommand({
          Bucket: "store4cards", // Replace with your bucket name
          Key: `cardsstore/${name}`, // Use original filename
          Body: buffer,
          ContentType: type,
          ACL: "public-read",
        });

        // Upload the file to S3
        await s3Client.send(params);
        const path = params.input.Key;
        imagesPath.push(
          `https://store4cards.s3.${S3_REGION}.amazonaws.com/${path}`
        );
      }
    }

    const newCard: T | any = {
      title: title,
      description: description,
      imageUrl: imagesPath,
      category: category,
      thumbnailUrl: thumbnailPath,
      price: price,
    };
    await post.create(newCard);
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error fetching wedding cards" + error, {
      status: 500,
    });
  }
}

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  try {
    if (!id) {
      return NextResponse.json({ message: "please enter id" });
    }

    const postdetails = await post.findById({ _id: id });
    if (!postdetails) {
      return NextResponse.json({ message: "id not found" });
    }
    const { thumbnailUrl, imageUrl } = <WeddingCardType>postdetails;
    if (thumbnailUrl) {
      const imagepath = thumbnailUrl.split("/");
      const imageName = imagepath[imagepath.length - 1];
      console.log("delete image" + imageName);
      const deleteParams = {
        Bucket: AWS_S3_BUCKET_NAME,
        Key: `thumbnails/${imageName}`, // Replace with the key (filename) of the image to delete
      };
      await s3Client.send(new DeleteObjectCommand(deleteParams));
    }
    if (imageUrl) {
      for (const i in imageUrl) {
        const imagepath = imageUrl[i].split("/");
        const imageName = imagepath[imagepath.length - 1];
        console.log("delete image" + imageName);
        const deleteParams = {
          Bucket: AWS_S3_BUCKET_NAME,
          Key: `cardsstore/${imageName}`,
        };
        await s3Client.send(new DeleteObjectCommand(deleteParams));
      }
    }
    await post.deleteOne({ _id: id });
    return NextResponse.json({ message: "Post has been deleted successfully" });
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json({ message: error.message });
  }
}

// export async function createPost(data: object) {
//   const {
//     title,
//     description,
//     imageUrl,
//     category,
//     thumbnailUrl,
//     price,
//   }: T | any = data;
//   try {
//     await connectDb();
//     let thumbnailPath: string | undefined;
//     let imagesPath: String[] = [];

//     if (thumbnailUrl?.size > 0) {
//       if (!thumbnailUrl.type.startsWith("image/")) {
//         console.error("Not an image file");
//         return;
//       }

//       const buffer = (await thumbnailUrl.arrayBuffer()) as Buffer;
//       // Build S3 upload parameters
//       const { name, type } = thumbnailUrl;
//       const params: any = new PutObjectCommand({
//         Bucket: AWS_S3_BUCKET_NAME, // Replace with your bucket name
//         Key: `thumbnails/${name}`, // Use original filename
//         Body: buffer,
//         ContentType: type,
//         ACL: "public-read",
//       });

//       // Upload the file to S3
//       await s3Client.send(params);
//       const path = params.input.Key;
//       thumbnailPath = `https://${AWS_S3_BUCKET_NAME}.s3.${S3_REGION}.amazonaws.com/${path}`;
//     }

//     for (const ddx in imageUrl) {
//       if (imageUrl[ddx]?.size > 0) {
//         if (!imageUrl[ddx].type.startsWith("image/")) {
//           console.error("Not an image file");
//           return;
//         }

//         const buffer = (await imageUrl[ddx].arrayBuffer()) as Buffer;
//         // Build S3 upload parameters
//         const { name, type } = imageUrl[ddx];
//         const params: any = new PutObjectCommand({
//           Bucket: "store4cards", // Replace with your bucket name
//           Key: `cardsstore/${name}`, // Use original filename
//           Body: buffer,
//           ContentType: type,
//           ACL: "public-read",
//         });

//         // Upload the file to S3
//         await s3Client.send(params);
//         const path = params.input.Key;
//         imagesPath.push(
//           `https://store4cards.s3.${S3_REGION}.amazonaws.com/${path}`
//         );
//       }
//     }

//     const newCard: T | any = {
//       title: title,
//       description: description,
//       imageUrl: imagesPath,
//       category: category,
//       thumbnailUrl: thumbnailPath,
//       price: price,
//     };
//     await post.create(newCard);
//     return NextResponse.json({ message: "Success" });
//   } catch (error: any) {
//     console.error("Error creating post:", error);
//     throw new Error(`Error creating post: ${error}`);
//     // return NextResponse.json({ message: 'Error', error: error._message }, {
//     //   status: 500, // Set custom status code (optional)
//     // });
//   }
// }
