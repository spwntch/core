'use client';
import { retrieveAnswerFromPage } from '@/node-langchain';

export default function Index() {
  const onTellMeAJokeClick = async () => {
    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: 'what do you offer?',
      }),
    });
    const joke = await response.json();
    console.log(joke);
  };
  return (
    <div className="h-full border-2 flex justify-center items-center">
      <button
        className="border-2 px-4 py-2 rounded-xl bg-black text-white"
        onClick={onTellMeAJokeClick}
      >
        EXECUTE AI
      </button>
    </div>
  );
}
