import { useEffect, useState } from "react";
import "../Appweather.css";

function Weather() {
  const name = "Bangkok";
  const apiKey = "7475b77179c89113e27e51237ab4e42b";
  const [City, setCity] = useState({});
  const [isLoading,setisLoading] = useState(false);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) =>{
      setCity(data)
      setisLoading(true)
    })
  }, [name]);

  const convertTemp = (k) => {
    return (k-273).toFixed()
  }
  return (
    (isLoading && <div className="App">
    <section>
      <div className="location">
        <h1 className="city">{City.name}</h1>
        <p className="state">{City.sys.country}</p>
      </div>
      <div className="card">
        <div className="weather">
          <h1>{convertTemp(City.main.temp)} &deg; C</h1>
          <small>max:{convertTemp(City.main.temp_max)}&deg; C , min :{convertTemp(City.main.temp_min)}&deg; C</small>
        </div>
        <div className="info">
          <div className="status">{City.weather[0].main}</div>
          <div className="humidity">ความชื้น = {City.main.humidity}</div>
          <div className="wind">ความเร็วลม = {City.wind.speed}</div>
        </div>
      </div>
    </section>
  </div>)
  );
}

export default Weather;
