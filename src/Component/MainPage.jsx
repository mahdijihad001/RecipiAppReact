import { useState } from "react";
import MealCard from "./MealCard";

export default function MainPage() {
    const [data , setData] = useState();
    const [search , setSearch] = useState();
    const MyFun = async () =>{
        let Get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        let JsonData = await Get.json();
        setData(JsonData.meals);
    };
    const handleInput = (event) =>{
        setSearch(event.target.value)
    }


  return (
    <div>

    <div className="serchContainer">
        <div className="searchBar mt-10 flex items-center gap-1">
            <input className="input input-bordered w-full max-w-xs" onChange={handleInput}  type="text" placeholder="Enter Meal" />
            <button className="btn btn-neutral" onClick={MyFun}>Search</button>
        </div>
        <div className="mt-10 flex items-center justify-center">
            <MealCard data={data} />
       </div>
    </div>
       
    </div>
  )
}
