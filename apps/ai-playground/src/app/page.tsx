'use client';
import { tellStructuredJoke } from '@/node-langchain';
export default function Index() {
  const onTellMeAJokeClick = async () => {
    const joke = await tellStructuredJoke('space ships');
    console.log(joke);
  };
  return (
    <div className="h-full border-2 flex justify-center items-center">
      <button
        className="border-2 px-4 py-2 rounded-xl bg-black text-white"
        onClick={onTellMeAJokeClick}
      >
        Tell me a joke
      </button>
    </div>
  );
}
