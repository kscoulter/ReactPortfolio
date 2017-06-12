import React from 'react';

class Project extends React.Component{
    render(){
    return(
      <div className="project">
        <div className="col">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <h3><i className={this.props.langIcons}></i> {this.props.languages}</h3>
        </div>
        <div className="col">
          <a href={this.props.url}> <img src={this.props.image} alt={this.props.altText}/></a>
        </div>
      </div>
    )
  }
}

export default Project;
