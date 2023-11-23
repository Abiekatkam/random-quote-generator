import React, { useEffect, useState } from "react";
import CopyQuoteBtn from "./CopyQuoteBtn";
import SpeackQuoteBtn from "./SpeackQuoteBtn";

// https://api.quotable.io/random

const QuoteCard = () => {
  const [quote, setQuote] = useState({});
  const [loadingText, setLoadingText] = useState("New Quote");

  function getRandomQuote() {
    setLoadingText("Loading...");
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        setLoadingText("New Quote");
      });
  }

  function speakQuote() {
    const msg = new SpeechSynthesisUtterance(
      `${quote?.content} by ${quote?.author}`
    );
    window.speechSynthesis.speak(msg);
  }

  function copyTextToClipboard() {
    navigator.clipboard.writeText(quote?.content);
  }

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="relative lg:h-[340px] h-fit w-full bg-white/10  backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl lg:py-4 lg:px-6 p-4 mt-12 lg:mt-0">
      <div className="w-full lg:h-full  flex items-center flex-col">
        <p className="lg:text-[2rem] text-[1.6rem] font-bold capitalize">
          Quote of the day
        </p>
        <div className="w-full lg:h-full lg:min-h-0 min-h-[280px] h-fit flex flex-col justify-between items-center divide-y divide-gray-400">
          <div className="w-full h-full flex-1 flex flex-col justify-center gap-1 lg:mb-1">
            <div className="w-full h-full flex flex-col lg:flex-row justify-center text-center">
              <span className="lg:w-[6%] flex lg:pt-8 items-start lg:justify-center pt-4 justify-start lg:text-[1.8rem] text-[1.5rem]">
                <i className="fa-solid fa-quote-left"></i>
              </span>
              <p className="lg:text-[1.2rem] text-[1.1rem] flex-1 font-bold capitalize text-center flex items-center">
                {quote?.content}
              </p>
              <span className="lg:w-[6%] flex lg:pb-8 items-end lg:justify-center pb-4 justify-end lg:text-[1.8rem] text-[1.5rem]">
                <i className="fa-solid fa-quote-right"></i>
              </span>
            </div>
            <span className="ml-auto lg:mr-10 lg:my-0 my-2 mr-2 font-bold italic text-[0.9rem]">
              -- {quote?.author}
            </span>
          </div>
          <div className="w-full flex flex-none items-center justify-between p-2">
            <div className="flex flex-row justify-center items-center gap-2">
              <SpeackQuoteBtn quote={speakQuote} />
              <CopyQuoteBtn quote={copyTextToClipboard} />
            </div>
            <button
              className="py-2 px-3 rounded-full shadow-2xl bg-indigo-700 text-white text-[1.1rem] hover:opacity-75 transition-all ease-in capitalize"
              disabled={loadingText === "Loading..."}
              onClick={getRandomQuote}
            >
              {loadingText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
