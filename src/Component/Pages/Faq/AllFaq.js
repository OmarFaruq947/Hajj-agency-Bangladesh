import React from "react";
import Faq from "./Faq";

const AllFaq = () => {
  const faqs = [
    { id: 1, question: "what ?", answer: "answer is what" },
    { id: 2, question: "why ?", answer: "answer is why" },
    { id: 3, question: "How ?", answer: "answer is How" },
    { id: 4, question: "where ?", answer: "answer is where" },
    { id: 5, question: "Time ?", answer: "answer is Time" },
    { id: 6, question: "Price ?", answer: "answer is Price" },
  ];
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
          <p className="text-neutral-500 text-xl mt-3">
            Frequenty asked questions
          </p>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          {faqs.map((faq) => (
            <Faq key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFaq;
