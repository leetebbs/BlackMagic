'use client'
import { Suspense, useState } from "react"
import { TradingViewWidget } from "../Chart"
import { MintCard } from "../Cards/MintCard"
import { GlobalContext } from "@/context/context"


export const OverView = ({slug}) => {
    
    const { mintCard, setMintCard } = GlobalContext()
    return(
    <div className="w-[100%] mb-20 h-[300px] ">
        <div className="flex ">
            <div className="w-[20%] py-14 px-28">
                <div className="w-[240px] h-[240px]  mr-2 lg:mt-0 rounded-full bg-white flex flex-wrap  py-0.5 px-0.5 ">
                 <img src="/nvidia--big.svg" className="ml-auto mr-auto w-full h-full rounded-full" />
                </div>
            </div>
            <Suspense fallback={<p>Loading</p>}>
            <div className="w-[40%] mr-auto ml-10 flex mt-9 px-16 py-8 flex-col">
                <div className="mt-5 mb-1 h-[27%]">
                    <p className="text-4xl">{`${slug}`}</p>
                </div>
                <div className="h-[25%] ml-12">
                    <p className="text-lg">{`X ${slug}`}</p>
                </div>
                <div className="mb-5 flex h-[27%]">
                    <div className="flex">
                       <p className="text-4xl ml-2 mr-0 "> {`1105.00`}</p>
                       <p className="text-sm mt-5 w-[60px] ml-1 h-7 py-1 px-4  rounded-3xl bg-white/10">USD</p> 
                    </div>
                    <div className=" ml-4 mr-4 text-xl text-green-500 mt-1.5">
                        +23.77%
                    </div>
                </div>
            </div>
            </Suspense>
            
            <div className="w-[40%]  py-12  flex items-center mt-4 px-12">
              <button onClick={() => setMintCard(true)} className="w-[290px] h-10 border text-xl border-white ml-auto mr-36 rounded-xl hover:bg-white/75  hover:border-black 5 hover:text-black ">{`Mint X${slug}`}</button>
            </div>
        </div>
        <div className="py-3 mt-5 px-12">
            <p className="text-4xl">{`${slug} Chart>`}</p>
        </div>
        <div className="w-[96%] h-[590px] ml-auto mr-auto text-center mb-[120px] py-5 px-5 bg-white mt-[20px] rounded-3xl bg-white/0">
          <TradingViewWidget slug={slug}/>
        </div>
        <div className="w-[97%] h-[590px] ml-auto mr-auto mb-[120px] py-4 px-2 mt-[90px] rounded-2xl">
            <div className="py-2 px-4 mb-4 text-4xl">
              About {slug}
            </div>
            
            <div className="w-[100%] py-3 bg-white/0 flex h-[125px]">
               <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
                 <p className="text-md py-1 font-bold">Sector</p>
                 <p className="text-xl py-2 font-semibold">Sector</p>
               </div>
               <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
                 <p className="text-md py-1 font-bold">Industry</p>
                 <p className="text-xl py-2 font-semibold">Sector</p>
               </div>
               <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
                 <p className="text-md py-1 font-bold">CEO</p>
                 <p className="text-xl py-2 font-semibold">Sector</p>
               </div>
               <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
                 <p className="text-md py-1 font-bold">Website</p>
                 <p className="text-xl py-2 font-semibold">Sector</p>
               </div>
            </div>
            <div className="w-[100%] py-3 bg-white/0 flex h-[125px]">
               <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
                 <p className="text-md py-1 font-bold">HeadQuarter</p>
                 <p className="text-xl py-2 font-semibold">Sector</p>
               </div>
               <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
                 <p className="text-md py-1 font-bold">Employees</p>
                 <p className="text-xl py-2 font-semibold">Sector</p>
               </div>
               <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
                 <p className="text-md py-1 font-bold">Founded</p>
                 <p className="text-xl py-2 font-semibold">Sector</p>
               </div>
               <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
                 <p className="text-md py-1 font-bold">Market Cap</p>
                 <p className="text-xl py-2 font-semibold">Sector</p>
               </div>
               
            </div>
            <div className="w-[100%] py-3 bg-white/0 flex h-[125px]">
              <div className="bg-white/5 py-2 px-4 rounded-xl w-[100%] h-auto ml-auto mr-auto">
                <p className="text-xl text-center py-3 px-3">fhkkusrdytfd</p>
              </div>
            </div>
        </div>
        {mintCard && <MintCard slug={slug}/>}
        
    </div>
)
}