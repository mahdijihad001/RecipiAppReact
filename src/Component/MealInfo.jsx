import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function MealInfo() {
  const { idMeal } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        const jsonData = await response.json();
        setInfo(jsonData.meals[0]);
      } catch (error) {
        console.error("Error fetching meal info:", error);
      }
    };

    if (idMeal) {
      getInfo();
    }
  }, [idMeal]);

  return (
    <div>
      {!info ? (
       <div className="flex w-full h-full flex-col gap-4">
       <div className="skeleton h-128 w-full"></div>
       <div className="skeleton h-16 w-28"></div>
       <div className="skeleton h-16 w-full"></div>
       <div className="skeleton h-16 w-full"></div>
     </div>
      ) : (
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <img className="w-[500px] h-[500px]" src={info.strMealThumb} alt="" />
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Recipe Detail</h1>
              <h1 className="mb-5 text-5xl font-medium italic">{info.strMeal}</h1>
              <h1 className="mb-5 text-7xl font-bold">Instructions</h1>
              <p className="mb-5">{info.strInstructions}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
