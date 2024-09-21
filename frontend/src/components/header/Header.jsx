import { AppBar, Toolbar, styled } from '@mui/material'; 
import { Link, useNavigate } from 'react-router-dom';
import "../../App.css"

const Component = styled(AppBar)`
  background: #1e406b;
  color: black;
`;

const Container = styled(Toolbar)`
  justify-content: center;
  & > a {
    padding: 20px;
    color: #fff;
    text-decoration: none;
    // font-weight: bold;
    font-size: 20px;
  }
`;

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear authentication tokens
        sessionStorage.clear();
        localStorage.clear()
        
        // Redirect to login page
        navigate('/account');
    };

    return (
        <Component>
      <Container>
        <Link to="/">
          <img src="cover.png" className="icon1" alt="Blog Nest" />
        </Link>
        <Link to="/">HOME</Link>
        <Link to="/profile">PROFILE</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/dashboard">DASHBOARD</Link>

        {/* Logout button */}
        <a href="/account" onClick={handleLogout}>
          LOGOUT
        </a>
      </Container>
    </Component>
    );
}

export default Header;
