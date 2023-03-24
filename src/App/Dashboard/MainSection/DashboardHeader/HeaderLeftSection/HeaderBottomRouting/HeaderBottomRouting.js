import './HeaderBottomRouting.css'
import { useLocation } from 'react-router-dom'

const HeaderBottomRouting = props => {
    const location = useLocation();

    return (
        <div className="headerBottomRouting">
            {location.pathname.substring('/dashboard'.length + 1).replace(/^\w/, c => c.toUpperCase())}
        </div>
    )
}


export default HeaderBottomRouting;
