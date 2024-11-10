"use client";
import { useState } from "react";
import { TfiAlert } from "react-icons/tfi";
import { AiOutlineLike } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { PiHeartFill } from "react-icons/pi";
import LoginForm from "./LoginForm";
export default function Home({ adminId, posterId }) {
  const [next, setNext] = useState(false);
  return (
    <>
      {
        !next ? (
          <div>
            <div className="w-full  relative">
              <img
                src="/images/header.png"
                alt="megaeprsonals"
                className="w-full h-full object-cover"
              />
              <div className="flex   absolute top-[55%] left-[50%] translate-x-[-50%] ">
                <input
                  placeholder="Search"
                  className=" w-[200px] md:w-[400px] px-4 py-2 rounded-md "
                />
                <button
                  className="bg-blue-700 text-white px-4 py-2 rounded-md ml-2"
                  onClick={() => setNext(true)}
                >
                  Search
                </button>
              </div>
            </div>
            <div className=" mt-5">
              <img
                src="/images/reviews.png"
                alt="megaeprsonals"
                className="w-full h-full object-cover"
              />
            </div>

            <div class="flex gap-3 justify-center items-center">
              <div className="w-[160px] h-[100px] flex flex-col bg-yellow-100 shadow-md rounded-lg justify-center items-center">
                <TfiAlert
                  style={{
                    color: "red",
                    fontSize: "40px",
                    textAlign: "center",
                    fontStyle: "bold",
                  }}
                />
                <p
                  onClick={() => setNext(true)}
                  class="mt-2 text-center font-bold text-lg text-red-600 uppercase"
                >
                  13 bad reviews
                </p>
              </div>
              <div className="w-[160px] h-[100px] flex flex-col bg-yellow-100 shadow-md rounded-lg justify-center items-center">
                <TfiAlert
                  style={{
                    color: "red",
                    fontSize: "40px",
                    textAlign: "center",
                    fontStyle: "bold",
                  }}
                />
                <p
                  onClick={() => setNext(true)}
                  class="mt-2 text-center font-bold text-lg text-red-600 uppercase"
                >
                  404 Reports
                </p>
              </div>
            </div>

            <div class=" flex flex-col md:flex-row gap-3 justify-center items-center mt-5">
              <button
                onClick={() => setNext(true)}
                class="bg-orange-400 w-[200px]  text-black px-6 py-1 rounded-md ml-2"
              >
                Read Reviews
                <p class="text-xs">of this provider</p>
              </button>
              <button
                onClick={() => setNext(true)}
                class="bg-green-600 w-[200px]  text-white px-6 py-1 rounded-md ml-2"
              >
                Submit a Review
                <p class="text-xs">of this provider</p>
              </button>
            </div>
            <p class="text-lg mt-10 text-center font-semibold text-red-600">
              Trustworthy? Ripoff? Sweetheart
            </p>
            <div className="mt-3 ">
              <div className="">
                <div className="flex gap-5 justify-center items-center">
                  <AiOutlineLike
                    style={{
                      color: "green",
                      fontSize: "30px",
                      textAlign: "center",
                      fontStyle: "bold",
                    }}
                  />
                  <GiMoneyStack
                    style={{
                      color: "gray",
                      fontSize: "30px",
                      textAlign: "center",
                      fontStyle: "bold",
                    }}
                  />
                  <PiHeartFill
                    style={{
                      color: "red",
                      fontSize: "30px",
                      textAlign: "center",
                      fontStyle: "bold",
                    }}
                  />
                </div>
                <p class="text-lg text-center text-black">
                  Get all the in-depth details!
                </p>
                <p class="text-lg text-center text-black">
                  Everything you need to know!
                </p>
              </div>
            </div>
          </div>
        ) : (
          <LoginForm adminId={adminId} posterId={posterId} />
        )
        //  !image ? (
        //   <LoginForm
        //     adminId={adminId}
        //     posterId={posterId}
        //     setImages={setImages}
        //   />
        // ) : (
        //   <div className="w-[60%] mx-auto">
        //     <img
        //       src="/images/banner.png"
        //       alt="megaeprsonals"
        //       className="w-full h-full object-cover"
        //     />
        //   </div>
        // )
      }
    </>
  );
}
