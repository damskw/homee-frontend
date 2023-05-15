import './HeaderBottomRouting.css'
import { useLocation } from 'react-router-dom'

const HeaderBottomRouting = props => {
    const location = useLocation();
    const pathParts = location.pathname.split('/');
    const newPath = pathParts[2] || '';

    const visiblePath = newPath.replace(/^\w/, c => c.toUpperCase());

    return (
        <div className="headerBottomRouting">
            {visiblePath ? <span>{visiblePath}</span> : null}
        </div>
    )
}

export default HeaderBottomRouting;
