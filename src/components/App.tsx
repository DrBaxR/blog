import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import '../style/App.css';

function App () {
  const location = useLocation();

  const hasFirstPathSegment = (segment: string): boolean => {
    return location.pathname.split('/')[1] === segment;
  };

  return (
    <div className='app-component'>
      <div className='nav shadow'>
        <div className={hasFirstPathSegment('articles') ? 'center' : 'right'}>
          <Link
            className='link'
            to='/articles'
          >
            Blog
          </Link>
        </div>
        <div className={hasFirstPathSegment('me') ? 'center' : 'right'}>
          <Link
            className='link'
            to='/me'
          >
            About Me
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
