import Cart from "../Cart/Cart";
import Categories from "../Filter/AllCategories";
import Plants from "../PlantsComponents/Plants";

const Home = () => {
    return (
        <div className="home-placeholder">
            <Plants/>
            <Categories/>
            <Cart/>
        </div>
    )
}
export default Home;