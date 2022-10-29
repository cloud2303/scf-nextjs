import { getCats } from "../utils/catData";


async function Page() {
  let data =await getCats()
  console.log(data)
  return <>这是cat界面
  <div>{
    data.map(item=>{
      return <div key={item._id}>{item.text}<div>{item.user}</div></div>
    })}</div></>
}
export default Page;