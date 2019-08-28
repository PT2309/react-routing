import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component{
    state={
        posts: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( resolve => {
                console.log(resolve.data);
                this.setState({
                    posts: resolve.data.slice(0, 40)
                })
            })
    }

    render(){
        const { posts } = this.state;
        const postList = posts.length > 0 ? (
            posts.map( post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
            ) : (<div className='center'>loading............</div>)
         
        return (
            <div className="container">
                <h4 className='center'> Home </h4>
                { postList }
            </div>
        )
    }    
}

export default Home;