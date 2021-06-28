import "./style.css";




export const CardRepos = (props) => {


  return (
    <div className="repo-card">
      <h2>{props.repos.name}</h2>
      <h3>{props.repos.description}</h3>
      <div className="repo-card-info">
        <div className="div-info">
          <h4>LANGUAGE</h4>
          <p>{`${props.repos.language}` ? `${props.repos.language}` : <p>-</p>}</p>
        </div>
        <div className="div-info">
          <h4>FORKS</h4>
          <p>{props.repos.forks}</p>
        </div>
        <div className="div-info">
          <h4>WATCHERS</h4>
          <p>{props.repos.watchers}</p>
        </div>   
       </div>

    </div>
  )
};