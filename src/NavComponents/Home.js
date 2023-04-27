import Cart from "../Cart/Cart";
import Categories from "../Filter/AllCategories";
import Plants from "../PlantsComponents/Plants";

const Home = () => {
    return (
        <div>
            <Plants/>
            <Categories/>
            <Cart/>
        </div>
    )
}
export default Home;