import { data } from "../Data/data";
import Plant from "./Plant";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../redux/plantsSlice";

const Plants = () => {
    const selectedCategory = useSelector(getSelectedCategory) 
    return (
        <div className="plants-cards">
            {data.filter(plant => plant.category === selectedCategory)
                    .map(plant => {
                        return <Plant plantInfo = {plant} key={plant.id}/>})}
        </div>
    )
}
export default Plants;