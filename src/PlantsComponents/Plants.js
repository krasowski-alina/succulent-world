import { data } from "../Data/data";
import Plant from "./Plant";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../redux/plantsSlice";

const Plants = () => {
    const selectedCategory = useSelector(getSelectedCategory) 
    return (
        <div className="plants-cards"></div>
            {data.filter(plant => {
                if(selectedCategory === "all") return selectedCategory
                return plant.category === selectedCategory})
                    .map(plant => {
                        return <Plant plant = {plant} key={plant.id}/>})}
        </div>
    )
}
export default Plants;