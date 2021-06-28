import "./style.css";

export const CardStar = (props) => {


  return (
    <div className="star-card">
      <h2>{props.star.name}</h2>
      <h3>{props.star.description}</h3>
      <div className="star-card-info">
        <div className="div-star-info">
          <h4>FORKS</h4>
          <p>{props.star.forks}</p>
        </div>
        <div className="div-star-info">
          <h4>WATCHERS</h4>
          <p>{props.star.watchers}</p>
        </div>   
      </div>
    </div>
  )
};