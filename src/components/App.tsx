import { Link, Outlet } from 'react-router-dom';
import '../style/App.css';

function App() {
  return (
    <div className='app-component'>
      <div className='nav'>
        <Link to='/articles'>Blog</Link>
        <Link to='/me'>About Me</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
