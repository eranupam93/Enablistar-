import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBeneficiaries, deleteBeneficiary } from '../features/beneficiaries/beneficiaryService'
import ConfirmationModal from '../components/ConfirmationModal'
import { useState } from 'react'

export default function ManageBeneficiaries() {
    const { beneficiaries, status, error } = useSelector(state => state.beneficiaries)
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    useEffect(() => {
        dispatch(fetchBeneficiaries())
    }, [dispatch])

    const handleDelete = (id) => {
        setSelectedId(id)
        setShowModal(true)
    }

    const confirmDelete = () => {
        dispatch(deleteBeneficiary(selectedId))
            .unwrap()
            .then(() => {
                setShowModal(false)
            })
            .catch(error => {
                alert(`Error: ${error.message}`)
            })
    }

    if (status === 'loading') return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div className="manage-container">
            <h2>Manage Beneficiaries</h2>
            <Link to="/add" className="add-btn">Add New Beneficiary</Link>

            <div className="beneficiary-list">
                {beneficiaries.length === 0 ? (
                    <p>No beneficiaries found. Add one to get started.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Country</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {beneficiaries.map(beneficiary => (
                                <tr key={beneficiary.id}>
                                    <td>{beneficiary.fullName}</td>
                                    <td>{beneficiary.country}</td>
                                    <td className="actions">
                                        <Link to={`/view/${beneficiary.id}`} className="view-btn">View</Link>
                                        <Link to={`/edit/${beneficiary.id}`} className="edit-btn">Edit</Link>
                                        <button onClick={() => handleDelete(beneficiary.id)} className="delete-btn">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <ConfirmationModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={confirmDelete}
                title="Confirm Deletion"
                message="Are you sure you want to delete this beneficiary?"
            />
        </div>
    )
}