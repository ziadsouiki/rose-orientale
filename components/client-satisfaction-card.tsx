import React from "react";
import {Review} from "../types/review.type";
interface Props {
    review: Review;
}
export default function ClientSatisfactionCard({review}: Props) {
  return (
    <>
      <div className="m-2 rounded shadow-lg">
        <div className="px-6 py-4">

          <p className="text-gray-700 text-base mr-2 italic">
          <span className="stylistic-quote-mark text-red-300" aria-hidden="true">
               &ldquo;
          </span>
            {review?.message}
            <span className="stylistic-quote-mark text-red-300" aria-hidden="true">
               &ldquo;
          </span>
          </p>
          <div className="font-bold text-l mb-2">{review?.name}</div>
        </div>
      </div>
      <style jsx global>{`
        .stylistic-quote-mark {
          font-size: 2rem;
          right: 100%;
          mr-2 hidden font-dank-mono text-neutral-500 absolute top-0 leading-none;
        }
    `}</style>
    </>
  )
}