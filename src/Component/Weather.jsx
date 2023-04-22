import { useEffect, useState } from 'react';
import '../Appweather.css'

function Weather() {
    const name = 'Bangkok';
    const apiKey = '7475b77179c89113e27e51237ab4e42b';
    const [City,setCity] = useState({});


    useEffect(()=>{

    },[])
  return (
    <div className='App'>
        <section>
            <div className="location">
                <h1 className="city">Bangkok</h1>
                <p className="state">TH</p>
            </div>
                <div className="card">
                    <div className="weather">
                        <h1>28</h1>
                        <small>max:37 , min : 20</small>
                    </div>
                <div className="info">
                    <div className="status">อากาศดี</div>
                    <div className="humidity">100</div>
                    <div className="wind">4.0</div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Weather