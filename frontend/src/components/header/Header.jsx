import { AppBar, Toolbar, styled } from '@mui/material'; 
import { Link, useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`;

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear authentication tokens
        sessionStorage.clear();
        
        // Redirect to login page
        navigate('/account');
    };

    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>

                <a href="/account" onClick={handleLogout}>LOGOUT</a>

                <Link to="/dashboard">DASHBOARD</Link>
                <Link to='/account'>LOGOUT</Link>

            </Container>
        </Component>
    );
}

export default Header;
