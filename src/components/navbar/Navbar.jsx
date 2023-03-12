import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LogoutIcon from '@mui/icons-material/Logout';

import "./navbar.scss"

const Navbar = ({setIsAuth}) => {

    const handleAuth = () => {
        sessionStorage.clear();
        setIsAuth(false);
    }

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Поиск..."/>
                    <ManageSearchIcon />
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