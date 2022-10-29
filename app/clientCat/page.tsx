"use client";
import useSWR from 'swr'
import { use } from "react";
import { getCats } from "../utils/catData";
function Page(){
  let data = useSWR("/cats",getCats);
  // let data = use(getCats());
  return <>这是cat界面
  <div>{
    data?.data?
    data?.data?.map(item=>{
      return <div key={item._id}>{item.text}<div>{item.user}</div></div>
    }):"架子啊急"}</div></>
  // return <>这是cat界面
  // <div>{
  //  data.map(item=>{
  //     return <div key={item._id}>{item.text}<div>{item.user}</div></div>
  //   })}</div></>
}
export default Page;
