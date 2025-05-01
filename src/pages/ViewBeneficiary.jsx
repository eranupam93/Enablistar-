import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchAllBeneficiaries } from '../features/beneficiaries/beneficiariesSlice'
// import { fetchAllBeneficiaries } from '../features/user/beneficiariesSlice'

const ViewBeneficiary = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { beneficiaries } = useSelector(state => state.beneficiaries)
    const beneficiary = beneficiaries.find(b => b.id === Number(id))

    useEffect(() => {
        if (beneficiaries.length === 0) {
            dispatch(fetchAllBeneficiaries())
        }
    }, [dispatch, beneficiaries.length])

    if (!beneficiary) return <div>Loading...</div>

    return (
        <div className="page-container">
            <h2>Beneficiary Details</h2>
            <div className="beneficiary-details">
                <div className="detail-row">
                    <span className="detail-label">Full Name:</span>
                    <span className="detail-value">{beneficiary.fullName}</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Address:</span>
                    <span className="detail-value">{beneficiary.address}</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Country:</span>
                    <span className="detail-value">{beneficiary.country}</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Pincode:</span>
                    <span className="detail-value">{beneficiary.pincode}</span>
                </div>
            </div>
            <Link to="/" className="back-btn">Back to List</Link>
        </div>
    )
}

export default ViewBeneficiary