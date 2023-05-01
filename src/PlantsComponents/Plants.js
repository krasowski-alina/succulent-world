import { data } from "../Data/data";
import Plant from "./Plant";

const Plants = () => {
    return (
        <div className="plants-card">
            {data.map(plant => {
            return <Plant plantInfo = {plant} key={plant.id}/>})}
        </div>
    )
}
export default Plants;