interface CatFact{
  _id:string,
  text:string,
  user:string
}
export async function getCats(){
  let res= await fetch("https://cat-fact.herokuapp.com/facts")
  return res.json() as Promise<CatFact[]>
}