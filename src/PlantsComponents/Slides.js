import { useState } from "react";

const Slides = ({images}) => {
    const [plantPic, setPlantPic] = useState(0)
    
    const nextBtn = () => {
        setPlantPic(prevPlantPic => {
            prevPlantPic ++;
            if(prevPlantPic > images.length - 1) {
                prevPlantPic = 0;
            }
            return prevPlantPic
        })
    }
    const prevBtn = () => {
        setPlantPic(prevPlantPic => {
            prevPlantPic --;
            if(prevPlantPic < 0){
                prevPlantPic = images.length - 1
            }
            return prevPlantPic
        })
    }
    return (
        <div className='slides-btns'>
            <button onClick={prevBtn} className="slides-btn">&lt;</button>
            <img src={images[plantPic]} alt="plant"  className="slides-img"/>
            <button onClick={nextBtn} className="slides-btn">&gt;</button>
        </div>
    )
}
export default Slides;