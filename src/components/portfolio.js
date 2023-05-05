import React from 'react';

function Portfolio() {
    return (
<>
    <div className= "container py-4">
        <h2 className="h2" id="Portfolio">Portfolio:</h2>
       <h3>Example Projects:</h3>

       <div className="row">
       <div className="card col">
                    <h5 className="card-title">Tech Blog App:</h5>
                <img className="card-img-top" src="/react-portfolio/images/tech-blog.png" alt="screenshot of webpage"/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://tech-blog-application.herokuapp.com/" className="btn btn-primary">Deployed Project</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mariahw4/14-Tech-Blog" className="btn btn-primary">Github Repo</a>

                </div>
            </div>
        </div>

       <div className="row">
            <div className="card col">
                    <h5 className="card-title">Web API group project:</h5>
                <img className="card-img-top" src="/react-portfolio/images/webAPI.png" alt="screenshot of webpage"/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://mariahw4.github.io/MovieDetails/" className="btn btn-primary">Deployed Project</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mariahw4/MovieDetails" className="btn btn-primary">Github Repo</a>

                </div>
            </div>

            <div className="card col">
                    <h5 className="card-title">Workday Scheduler: </h5>
                <img className="card-img-top" src="/react-portfolio/images/workday-scheduler.png" alt="screenshot of webpage"/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://mariahw4.github.io/05-workday-scheduler/" className="btn btn-primary">Deployed Project</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mariahw4/05-workday-scheduler" className="btn btn-primary">Github Repo</a>

                    
                </div>
            </div>
        </div>

        <div className="row">
            <div className="card col">
                    <h5 className="card-title">Weather Dashboard:</h5>
                <img className="card-img-top" src="/react-portfolio/images/weather-dashboard.png" alt="screenshot of webpage"/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://mariahw4.github.io/06-weather-dashboard/" className="btn btn-primary">Deployed Project</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mariahw4/06-weather-dashboard" className="btn btn-primary">Github Repo</a>

                </div>
            </div>
            <div className="card col">
                    <h5 className="card-title">Password Generator: </h5>
                <img className="card-img-top" src="/react-portfolio/images/password-generator.png" alt="screenshot of webpage"/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://mariahw4.github.io/03-javascript-password-generator/" className="btn btn-primary">Deployed Project</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mariahw4/03-javascript-password-generator" className="btn btn-primary">Github Repo</a>

                </div>
            </div>
            <div className="card col">
                    <h5 className="card-title">Basic Portfolio: </h5>
                <img className="card-img-top" src="/react-portfolio/images/early-portfolio.png" alt="screenshot of webpage"/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://mariahw4.github.io/02-professional-portfolio/" className="btn btn-primary">Deployed Project</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mariahw4/02-professional-portfolio" className="btn btn-primary">Github Repo</a>

                    
                </div>
            </div>
        </div>
    </div>
</>
        )
}

export default Portfolio;
