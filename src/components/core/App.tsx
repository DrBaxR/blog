import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BsLightbulbFill, BsLightbulbOffFill } from 'react-icons/bs';
import './App.css';

function App () {
  const location = useLocation();
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(() => {
    const enabled = localStorage.getItem('darkTheme');

    return enabled !== null ? (JSON.parse(enabled) as boolean) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkTheme', `${darkThemeEnabled}`);
  }, [darkThemeEnabled]);

  const hasFirstPathSegment = (segment: string): boolean => {
    return location.pathname.split('/')[1] === segment;
  };

  // TODO: extract nav in component
  return (
    <div className={`app-component ${darkThemeEnabled ? 'dark' : ''}`}>
      <div className="nav shadow">
        <div className="actions">
          <button
            onClick={() => setDarkThemeEnabled((prev) => !prev)}
            className="theme-button"
          >
            {darkThemeEnabled
              ? (
              <BsLightbulbOffFill size="25px" />
                )
              : (
              <BsLightbulbFill size="25px" />
                )}
          </button>
        </div>
        <div className={hasFirstPathSegment('articles') ? 'center' : 'right'}>
          <Link className="link" to="/articles">
            Blog
          </Link>
        </div>
        <div className={hasFirstPathSegment('me') ? 'center' : 'right'}>
          <a className="link" href="https://me.andiflorea.dev">
            About Me
          </a>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
