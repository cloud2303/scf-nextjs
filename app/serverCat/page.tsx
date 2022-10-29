
interface CatFact{
  _id:string,
  text:string,
  user:string
}
 async function getCats(){
  let res= await fetch("https://cat-fact.herokuapp.com/facts",{
    cache: 'no-store'
  })
  return res.json() as Promise<CatFact[]>
}
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