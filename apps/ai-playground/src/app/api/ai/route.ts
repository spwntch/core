import { retrieveAnswerFromPage } from '@/node-langchain';
import { NextResponse } from 'next/server';

type RequestBody = {
  input:string
};

export const POST = async (req: Request) => {
  const { input }: RequestBody =
    await req.json();

  try {
    const completion = await retrieveAnswerFromPage(input)
    return NextResponse.json({ completion });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
