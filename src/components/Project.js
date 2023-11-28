

export const Project = (props) => {

return (
<div className="col-12 col-md-6 col-lg-4">
<div className="card my-2" style={{ border: "4px solid black", height: '97%' } } >
    <h5 className="card-title">{props.title}</h5>
  <img
    className="card-img-top"
    src={props.image}
    alt="screenshot of webpage"
  />
  <div className="card-body">
    <p className="card-text">{props.description}</p>
    <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
        className="btn btn-dark"
      >
        Deployed Project
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.github}
        className="btn btn-dark"
      >
        Github Repo
      </a>
  </div>
</div>
</div>
)
}