import { useSelector, useDispatch} from "react-redux";
import { filterCategory, getSelectedCategory } from "../redux/plantsSlice";

const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory)
    const dispatch = useDispatch()
    return (
        <div >
            <h6 onClick={()=> dispatch(filterCategory(category))} className={selectedCategory === category ?
                    'selected-category' : 'filter-btn'}>
                        {category}</h6>
            
        </div>
    )
}
export default Filter;