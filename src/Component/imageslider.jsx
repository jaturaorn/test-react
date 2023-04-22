import Imagedata from "./imgesdata"
import '../Slider.css'
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";


const Imageslider = () => {
    const [Current,setCurrent] = useState(0);
    const length = Imagedata.length

    const prevSlide =()=>{
        if(Current === 0){
            setCurrent(length-1)
        }else{
            setCurrent(Current-1)
        }
    }
    const nextSlide =()=>{
        if(Current === length-1){
            setCurrent(0)
        }else{
            setCurrent(Current+1)
        }
    }

    return (
    <section className="slider">
        <AiOutlineArrowLeft className="leftArrow" onClick={prevSlide}/>
        <AiOutlineArrowRight className="rightArrow" onClick={nextSlide}/>
        {Imagedata.map((data, index) =>{
            return (
                <div className={index === Current ? "slide active" : "slide"} key={index}>
                    <div>
                        <img src={data.image} alt={data.title} className="image"/>
                    </div>
                </div>
            )
        })}
    </section>
  )
}

export default Imageslider