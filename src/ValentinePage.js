import { useState } from "react";

export default function ValentinePage() {
  const [showPartner, setShowPartner] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 p-4 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-6">Happy Valentine's Day! 💖</h1>
      
      <button
        onClick={() => setShowPartner(true)}
        className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-red-600 transition duration-300"
      >
        Do you want to know your partner?
      </button>
      
      {showPartner && (
        <div className="mt-6 text-3xl font-bold text-purple-700">
          Cheeko 💘
        </div>
      )}

      <p className="mt-8 text-5xl font-extrabold text-pink-700 animate-bounce">
        Chinto ❤️ Cheeko
      </p>
    </div>
  );
}
