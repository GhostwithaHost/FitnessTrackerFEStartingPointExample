import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import NavBar from "./NavBar";
import RegisterForm from './RegisterForm';
import LogInForm from './LogInForm';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInUsername, setLoggedInUsername] = useState('');

    async function isValidJWT() {
        const token = localStorage.getItem("access_token");
        if (!token) setIsLoggedIn(false);
        else {
          const isValid = await testAuthentication(token);
          setLoggedInUsername(isValid.data.user.username);
          setIsLoggedIn(isValid);
        }
      }

      let userObject = {
        user: {
          username: username,
          password: password
        }
      }
    
      useEffect(() => {
        isValidJWT();
      }, []);



    return (

        <Router>
          
          <NavBar isLoggedIn={isLoggedIn} loggedInUsername={loggedInUsername} />
          
            <Route exact path="/">
              {isLoggedIn ?
              <h1 className="welcometext">FitnessTrackr</h1>
              :
              <LogInForm setToken={setToken} userObject={userObject} setUsername={setUsername} setPassword={setPassword} />
            }
            </Route>
    
            <Route path="/register">
              <RegisterForm token={token} setToken={setToken} />
            </Route>
            
            {/* <Route path="/posts">
              <PostList isLoggedIn={isLoggedIn} posts={posts} setPosts={setPosts} message={message} setMessages={setMessages} />
            </Route>
    
    
            <Route path="/createpost">
              <PostForm posts={posts} setPosts={setPosts} />
            </Route>
    
            <Route path="/messages">
              <MessagesList />
            </Route> */}
    
    
    
    
        </Router>
      );
    }
    
export default App;