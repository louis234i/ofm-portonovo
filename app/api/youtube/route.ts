import { NextResponse } from "next/server";

const API_KEY = process.env.YOUTUBE_API_KEY!;
const HANDLE = process.env.YOUTUBE_CHANNEL_HANDLE!;

export async function GET() {
  try {
    // Get the channel ID from the handle
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${HANDLE.replace(
        "@",
        ""
      )}&key=${API_KEY}`,
      { next: { revalidate: 300 } }
    );

    const channelData = await channelResponse.json();

    if (!channelData.items?.length) {
      return NextResponse.json(
        { error: "Channel not found" },
        { status: 404 }
      );
    }

    const channelId = channelData.items[0].id;

    // Check if the channel is currently live
    const liveResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${API_KEY}`,
      { next: { revalidate: 60 } }
    );

    const liveData = await liveResponse.json();

    if (liveData.items?.length) {
      return NextResponse.json({
        live: true,
        videoId: liveData.items[0].id.videoId,
        title: liveData.items[0].snippet.title,
      });
    }

    // Otherwise get the latest uploaded video
    const latestResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=1&key=${API_KEY}`,
      { next: { revalidate: 300 } }
    );

    const latestData = await latestResponse.json();

    return NextResponse.json({
      live: false,
      videoId: latestData.items[0].id.videoId,
      title: latestData.items[0].snippet.title,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch YouTube data." },
      { status: 500 }
    );
  }
}