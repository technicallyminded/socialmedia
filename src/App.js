import Home from './components/Home';
import Feed from './components/Feed';
import Post from './components/Post';
import Feeds from './components/Feeds';
import Profile from './components/Profile';
import { useState } from 'react';

const App = () => {
  const [feedState, setFeedState] = useState([
    { name: 'Bob', post: 'This is my first post' },
    { name: 'Sally', post: 'Woah, this is a cool app!' },
  ]);
  const [profileStatus, setProfileStatus] = useState([]);
  const handlePost = (post) => {
    setFeedState([...feedState, post]);
  };
  const handleProfile = (profileStatus) => {
    setProfileStatus(profileStatus);
  };
  return (
    <div className='container'>
      <Home />
      <Post addPost={handlePost} />
      <Feeds feedState={feedState} />
      <Profile profileStatus={handleProfile} />
    </div>
  );
};

export default App;
