import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'

import "./sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/"><span className="logo">"По Шагам"</span></Link>
            </div>
            <hr></hr>
            <div className="center">
                <ul>
                    <p className="title">ОСНОВНАЯ ИНФОМРАЦИЯ</p>
                    <li>
                        <AccountCircleIcon className='icon' />
                        <span>Моя страница</span>
                    </li>
                    <li>
                        <MenuBookIcon className='icon' />
                        <Link to="/courses"><span>Мои курсы</span></Link>
                    </li>
                </ul>
            </div>
            <div className="bottom"></div>
        </div>
    )
}

export default Sidebar;