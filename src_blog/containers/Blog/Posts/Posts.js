import React , { Component } from 'react';
import axios from '../../../axios';
import classes from './Posts.css';
import Post from '../../../components/Post/Post';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }
    
    componentDidMount() {
       
        axios.get('/posts')
             .then(response => {
                 const posts = response.data.slice(0,4);
                 const updatedPosts =  posts.map(post => {
                     return {
                         ...post,
                         author: 'Vaibhav'
                     }
                 })
                 this.setState( {
                     posts: updatedPosts
                 });
             })
             .catch(error => {
                    // this.setState({
                    //     error: true
                    // })
             });
    }

    postSelectedHandler = (id) => {
        //this.setState({selectedPostID: id});
        
        alert('here id'+id);
        this.props.history.push({
            pathname: '/posts/'+id
        })
    
    }



    render(){

        let posts = <p style={{ textAlign: 'center' }}> Something Went Wrong </p>
        if(!this.state.error) {
            posts =  this.state.posts.map(post => {
                return (
                        // <Link to={'/posts/'+post.id} key={"postsId"+post.id}>
                        <Post 
                            key={post.id} 
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}  
                         />
                        //  </Link>
                )
            });
        }


        return (
            <div>
                <section className={classes.Posts}>
                  {posts}
                </section>
                 <Route path="/posts/:id" exact component={FullPost} />      
            </div>
            

        )
    }
}


export default Posts;