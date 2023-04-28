import { data } from "../Data/data";
import Plant from "./Plant";

const Plants = () => {
    return (
        <div>
            {data.map(plant => {
            return <Plant plantInfo = {plant} key={plant.id}/>})}
        </div>
    )
}
export default Plants;