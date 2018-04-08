import React from 'react';

//[["slides", "http//"],["github","https://"],["video", "http"]]

class SimpleCard extends React.Component{

  render(){
    const { url, links, title, description, background } = this.props
    return(
      <div className="card" style={{backgroundColor: background}}>
        <h2>{title}</h2>
        <p>{description}</p>
        {links.map( (obj, index) =>{
          return(<a key={obj[0]} href={obj[1]}>{obj[0]}</a>)
        })}
      </div>
    )
  }
}

export default SimpleCard;
