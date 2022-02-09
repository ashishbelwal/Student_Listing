
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Container maxWidth="lg">
                        
                        <Button variant="text" className='navButton' component={Link} to={`/`}>
                        Student List
                        </Button>
                    </Container>
                    
                </Toolbar>
            </AppBar>
        </nav>
     );
}
 
export default Navbar;