import React, { Component } from 'react';

import { Route ,NavLink, Switch, Redirect } from 'react-router-dom';

import classes from './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from '../Blog/NewPost/NewPost';
const AsnycNewPost = asyncComponent( () => {
    return import('../Blog/NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    }

    render () {
        
        return (
            <div className={classes.Blogs}>
                <header>
                    <nav>
                        <ul>
                            <li> <NavLink 
                                to="/posts" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color:'red',
                                    textDecoration:'underline'
                                }}> Posts </NavLink> </li>
                            <li> <NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}> New Post </NavLink> </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home </h1>} /> */}
                    {/* <Posts /> */}
                <Switch>
                      {this.state.auth ? <Route path="/new-post" component={AsnycNewPost} />    : null}   
                        <Route path="/posts" component={Posts} />
                        <Route render={()  => <h1> Not Found </h1>} />
                        {/* <Redirect from="/" to="/posts" /> */}
                        {/* <Route path="/" component={Posts} />   */}
                </Switch>   
                 
                 
                {/* <section>
                    <FullPost id={this.state.selectedPostID} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;