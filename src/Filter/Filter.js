import { useSelector } from "react-redux";
import { getSelectedCategory } from "../redux/plantsSlice";

const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory)
    return (
        <div >
            <h6 className={selectedCategory === category ?
                    'selected-category' : 'filter-btn'}>
                        {category}</h6>
            
        </div>
    )
}
export default Filter;