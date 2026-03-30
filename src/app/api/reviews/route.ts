import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId || placeId === "your_place_id_here") {
    return NextResponse.json({ reviews: [] });
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "reviews,rating,userRatingCount",
        },
        next: { revalidate: 3600 },
      }
    );

    const data = await res.json();

    if (!data.reviews) {
      return NextResponse.json({ reviews: [] });
    }

    const reviews = data.reviews
      .filter((r: { rating: number }) => r.rating >= 4)
      .map((r: { authorAttribution: { displayName: string; photoUri: string }; text: { text: string }; rating: number; relativePublishTimeDescription: string }) => ({
        name: r.authorAttribution.displayName,
        photo: r.authorAttribution.photoUri,
        quote: r.text.text,
        rating: r.rating,
        time: r.relativePublishTimeDescription,
      }));

    return NextResponse.json({
      reviews,
      overall: data.rating,
      total: data.userRatingCount,
    });
  } catch {
    return NextResponse.json({ reviews: [] });
  }
}
