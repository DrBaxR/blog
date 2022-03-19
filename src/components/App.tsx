import { Link, Outlet } from 'react-router-dom';
import '../style/App.css';

function App() {
  return (
    <div className='app-component'>
      <div className='nav shadow'>
        <div className='center'>
          <Link className='link' to='/articles'>Blog</Link>
        </div>
        <div className='right'>
          <Link className='link' to='/me'>About Me</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
