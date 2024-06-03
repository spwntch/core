'use client';
import { retrieveDadJoke } from '@/node-langchain';

export default function Index() {
  const onTellMeAJokeClick = async () => {
    const joke = await retrieveDadJoke();
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
