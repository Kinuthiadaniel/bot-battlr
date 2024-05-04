export function displayBotsbyId(id){
fetch(`http://localhost:3000/bots/${id}`,{
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  }
})
.then(res=>res.json())
.then((data)=>{

})
}