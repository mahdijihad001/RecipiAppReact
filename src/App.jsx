import MainPage from "./Component/MainPage";
import { Route , Routes} from "react-router-dom";
import MealInfo from "./Component/MealInfo";


const App = () =>{
  return(
    <section>
      <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/:idMeal" element={<MealInfo/>} />
      </Routes>
    </section>
  )
}

export default App;