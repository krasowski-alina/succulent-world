import Cart from "../Cart/Cart";
import Categories from "../Filter/AllCategories";
import Plants from "../PlantsComponents/Plants";

const Home = () => {
    return (
        <div className="home-placeholder">
            
            <Categories/>
            <Plants/>
            <Cart/>
        </div>
    )
}
export default Home;