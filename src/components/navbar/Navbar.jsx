import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LogoutIcon from '@mui/icons-material/Logout';

import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Поиск..."/>
                    <ManageSearchIcon />
                </div>

                <div className="items">
                    <div className="item">
                        <LogoutIcon className='icon'/>
                        Выйти
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;