// import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import "./navbar.scss"

const Navbar = ({setIsAuth}) => {

    const navigate = useNavigate();

    const handleAuth = () => {
        sessionStorage.clear();
        setIsAuth(false);
        navigate("/login");
    }

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="top">
                    <Link to="/" style={{'textDecoration':'none'}}><span className="logo">По Шагам</span></Link>
                </div>
                <div className="items">
                    <div onClick={handleAuth} className="item">
                        <LogoutIcon className='icon'/>
                        <span>Выйти</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;