import { NextRequest, NextResponse } from "next/server";
import connectDb from "../../db";
import { WeddingCardType } from "../../schemas/weddincardSchema";
import WeddingCard from "../../schemas/weddincardSchema";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(request: Request) {
  const post = WeddingCard;
  try {
    await connectDb();
    const weddingCardslist: WeddingCardType[] = await post
      .find()
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

export async function POST(request : Request) {
  const post = WeddingCard;
  const data = await request.json();
  const { title, description, imageUrl, category,thumbnailUrl,price } : WeddingCardType = data;
  try {
    await connectDb();
    const newCard : any = {
      'title': title,
      'description': description,
      'imageUrl': imageUrl,
      'category': category,
      'thumbnailUrl': thumbnailUrl,
      'price': price,
    };
    
    const result = await post.create(newCard);
    return NextResponse.json(result)  
  } catch (error) {
    console.error(error);
    return new NextResponse("Error fetching wedding cards" + error, {
      status: 500,
    });
  }
}
