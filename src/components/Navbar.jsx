import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    <i class="fa-rectangle-vertical"></i>  Manage Beneficiary
                </Link>
                <div className="navbar-links">
                    <div className="nav-icon profile-icon" title="Profile">
                        <i className="fas fa-user-circle"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar