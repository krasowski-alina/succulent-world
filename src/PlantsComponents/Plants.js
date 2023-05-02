import { data } from "../Data/data";
import Plant from "./Plant";

const Plants = () => {
    return (
        <div className="plants-cards">
            {data.map(plant => {
                return <Plant plantInfo = {plant} key={plant.id}/>})}
        </div>
    )
}
export default Plants;