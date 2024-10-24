import './WeatherForecast.css';

const WeatherForecastSetup = (props) => {
    return (
    <>
    <section>
      <li>
        <div className="weather">
          <h2>Day of the Week: {props.day}</h2>
          <img src={props.img} alt={props.alt} />
          <p><span>conditions:{props.conditions} </span></p>
          <p><span>time: {props.time} </span></p>
        </div>
      </li>
    </section>
   </>
   )
}

export default WeatherForecastSetup