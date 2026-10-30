import Item1 from "./assets/Images/Item1.png"
import Item3 from "./assets/Images/Item3.png"
const Items=[
    {img:Item1,price:99,name:"Item1"},
    {img:Item3,price:150,name:"Item3"}
]
const Iam=()=>{
    
    return(
        <div>
        <h1>Menu</h1>
        
        {Items.map((item)=>{
            return(
            <div key={item.name}>
            <img src={item.img} alt="Item1" />
            <h1>{item.name}</h1>
            <h1>Price:${item.price}</h1>
            </div>
            )
})}
</div>
)}
export default Iam