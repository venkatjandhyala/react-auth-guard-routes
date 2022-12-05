import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

function Navigation() {
  const { authenticated, logout } = useAuth();
  return (
    <nav id="main-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!authenticated && <li>
          <Link to="/auth">Authenticate</Link>
        </li>}
        {authenticated && 
          <>  
            <li>
              <Link to="/user">User Profile</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        }
      </ul>
    </nav>
  );
}

export default Navigation;
