import React, {useEffect, useState} from "react";
import ClientSatisfactionCard from "./client-satisfaction-card";
import {Review} from "../types/review.type";
interface Props {
  reviews: Review[];
}
export default function ClientSatisfaction({reviews}: Props) {
  const [review, setReview] = useState<Review>(reviews[0])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  useEffect(() => {setReview(reviews[selectedIndex]), selectedIndex})

  const leftClick = () => {
    if(selectedIndex > 0){
      setSelectedIndex((selectedIndex-1))
    }
  }

  const rightClick = () => {
    if(selectedIndex < reviews.length-1){
      setSelectedIndex((selectedIndex+1))
    }
  }

  return (
    <>
      <section className="flex items-center flex-col">
        <h2 className=" border-b-2 border-red-300"> Client <span className="text-red-300">Satisfaction</span></h2>
        <div className="flex justify-around items-center min-w-full">
          <div id="left-button-satisfaction"
               onClick={leftClick}
               className="h-8 w-8">
            <svg className={selectedIndex == 0 ? 'text-gray-200' : 'cursor-pointer animate-bounce'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
          </div>
          <ClientSatisfactionCard
             review={review}
          />
          <div onClick={rightClick}
               id='right-button-satisfaction' className="h-8 w-8">
            <svg className={selectedIndex == reviews.length-1 ? 'text-gray-200' : 'cursor-pointer animate-bounce'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}