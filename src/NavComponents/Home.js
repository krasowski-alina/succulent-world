import Categories from "../Filter/AllCategories";
import Plants from "../PlantsComponents/Plants";

const Home = () => {
    return (
        <div>
            <div className="home-heroSection">
                <h1>Welcome to the fascinating world of plants!</h1>
                <p>Happy, healthy & home grown succulents</p>
                <button>SHOP NOW</button>
                <button>READ ABOUT ME</button>
                <div className ="plant-container">
                    <img src="https://img.freepik.com/free-photo/succulent-plant-closeup_1372-295.jpg?w=2000&t=st=1685641602~exp=1685642202~hmac=60f850edfb358c2d08684a01277255e0ee2c8fdf555ee01cd91d86958fad9396" className="plant-test"/>
                </div>
            </div>
            <div className="home-placeholder">
                <Categories/>
                <Plants/>
            </div>
        </div>
    )
}
export default Home;