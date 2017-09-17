import React from 'react';

class ProjectCard extends React.Component{
    render(){
    return(
      <div className="project {this.props.name}">
        <div className="col">
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
        </div>
        <div className="col">
          <a href={this.props.url}><img src={this.props.image} alt="screenshot of the app"/></a>
        </div>
      </div>
    )
  }
}

export default ProjectCard;
