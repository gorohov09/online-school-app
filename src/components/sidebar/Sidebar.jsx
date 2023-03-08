import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import "./sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">"По Шагам"</span>
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
                        <span>Мои курсы</span>
                    </li>
                </ul>
            </div>
            <div className="bottom"></div>
        </div>
    )
}

export default Sidebar;