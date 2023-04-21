import Imagedata from "./imgesdata"

const Imageslider = () => {
    return (
    <section className="slider">
        {Imagedata.map((data, index) =>{
            return (
                <div className="slide">
                    <div>
                        <img src={data.image} alt={data.title}/>
                    </div>
                </div>
            )
        })}
    </section>
  )
}

export default Imageslider