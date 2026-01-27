import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const res = await fetch(process.env.FORM_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return NextResponse.json({ success: res.ok });
}
