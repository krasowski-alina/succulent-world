import Filter from "./Filter";

const Categories = () => {
    const plantCategories = ['all', 'succulent', 'cactus', 'agave', 'lithops']
    return (
        <div className="filter-bar">
            <h1>Find your new plant</h1>
            <div className="filter-btn-container">
                {plantCategories.map((category, index) => {
                    return <Filter category={category}
                                key={index}/>
                })}
            </div>

        </div>
    )
}
export default Categories;