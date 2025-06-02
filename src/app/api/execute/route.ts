import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,  
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  return NextResponse.json(result);
}
