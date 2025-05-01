import { Link } from 'react-router-dom'

const Breadcrumb = () => {
    return (
        <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator"> / </span>
            <span>List of beneficiaries</span>
        </div>
    )
}

export default Breadcrumb