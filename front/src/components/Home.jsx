import Button from '@mui/material/Button';
import './Home.css';

function Home() {
    return (
        <>
        <div className="homepage">
        </div>
        <div className='buttons'>
            <h1>Welcome to Beauty Parlour</h1>
            <div >
            <Button variant="contained" color="primary" onClick={() => window.location.href = '/register'} sx={{marginRight: '40px'}}>
                Register
            </Button>
            <Button variant="contained" color="secondary" onClick={() => window.location.href = '/procedures'}>
                Search Procedures
            </Button>


            </div>
        </div>
        </>
    );
}

export default Home;