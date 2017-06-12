import React from 'react';
import axios from 'axios';
import xml2js from 'xml2js';
import $ from 'jquery';

class MediumFeed extends React.Component{
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.filterPosts       = this.filterPosts.bind(this);
    this.pullImage         = this.pullImage.bind(this);

    this.state = {
      posts: []
    };
  }
  componentDidMount(){
    var self = this;
    axios.get('https://medium.com/feed/@kcoulter')
      .then(function(response) {
        const parser = new xml2js.Parser()
        parser.parseString(response.data, function(err, result){
          const posts = result.rss.channel[0].item;
          self.filterPosts(posts);
          self.pullImage(self.state.posts);
        })
      })
      .catch(function (error){
        console.log(error);
      })
  }
  filterPosts(posts){
    const filteredPosts = []
    posts.forEach(function(post){
      //if category key exists, it is a post and not a comment
      if(post.category){
        filteredPosts.push(post);
      }
    })
    this.setState({ posts : filteredPosts });
  }
  pullImage(posts){
    posts.forEach(function(post){
      const contentStr = post['content:encoded'][0];
      // const re = new RegExp('<[img](.+?)(\/>)');
      //this might be a pretty brittle expression.
      const re = new RegExp('"https([^"]+)"');
      const imgMatch = re.exec(contentStr);
      post.image = imgMatch[0].replace(/\"/g, '');
    })
    this.setState({ posts })
  }
    render(){
    return(
        <div className="medium-posts">
        {this.state.posts.map(function(post, index){
          return (
            <a href={post.link} key={index}>
              <div style={{backgroundImage: 'url('+post.image+')'}}>
              <h2 key={index}>{post.title}</h2>
              </div>
            </a>
          )
        })}
        </div>
    )
  }
}

export default MediumFeed;
