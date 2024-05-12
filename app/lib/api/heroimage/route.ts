import { NextRequest, NextResponse } from "next/server";
import connectDb from "../../db";
import { s3Client } from "../products/route";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { AWS_S3_BUCKET_NAME, S3_REGION } from "@/app/exports/exportfiles";
import heroimage, { HeroImage } from "../../schemas/heroimage";

const post = heroimage;
export async function GET(request: NextRequest) {
  try {
    await connectDb();
    const hero: HeroImage[] = await post.find({}, { _id: 0, __v: 0, createdAt: 0 });
    return NextResponse.json(hero[0]);
  } catch (error) {
    console.error(error);
    return new NextResponse("Error fetching wedding cards" + error, {
      status: 500,
    });
  }
}
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const title = formData.get("title");
  const image = formData.get("image") as File;
  console.log(image);
  try {
    await connectDb();
    const buffer = (await image.arrayBuffer()) as Buffer;
    const params: any = new PutObjectCommand({
      Bucket: AWS_S3_BUCKET_NAME, // Replace with your bucket name
      Key: "hero_image", // Use original filename
      Body: buffer,
      ContentType: image.type,
      ACL: "public-read",
    });
    const path = params.input.Key;
    const hero_image_path = `https://${AWS_S3_BUCKET_NAME}.s3.${S3_REGION}.amazonaws.com/${path}`;
    // Upload the file to S3
    const heroCard = {
      title: title,
      image: hero_image_path,
      updatedAt: new Date(),
    };

    await s3Client.send(params);
    await post.updateOne(
      { _id: "663f3f8961176b3ddfc32497" },
      { $set: heroCard }
    );
    // const result = await post.create(heroCard);
    // return Response.json(result);
    return Response.json({ message: "Successfully uploaded" });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error fetching wedding cards" + error, {
      status: 500,
    });
  }
}
