import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const MealCard = ({ data }) => {
  return (
    <section className="grid grid-cols-3 gap-4 items-center">
      {!data ? (
        <div>
          <div className="w-[100%] text-center bg-white px-4">
            <h1 className="uppercase tracking-widest text-gray-500 text-center mr-[-122px]">
              404 | Not Found
            </h1>
          </div>
        </div>
      ) : (
        data.map((item) => (
          <div
            key={item.idMeal}
            className="card card-compact bg-base-100 w-96 shadow-xl"
          >
            <figure>
              <img src={item.strMealThumb} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.strMeal}</h2>
              <div className="card-actions justify-end">
                <NavLink to={`/${item.idMeal}`}>
                  <button className="btn btn-primary">Recipe</button>
                </NavLink>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default MealCard;
