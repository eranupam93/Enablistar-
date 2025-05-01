import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { fetchAllBeneficiaries, deleteExistingBeneficiary } from '../features/user/beneficiariesSlice'
import ConfirmationModal from '../components/ConfirmationModal'
import { useState } from 'react'
import { deleteExistingBeneficiary, fetchAllBeneficiaries } from '../features/beneficiaries/beneficiariesSlice'
import Breadcrumb from '../components/Breadcrumb'

const Home = () => {
    const { beneficiaries, status, error } = useSelector(state => state.beneficiaries)
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    useEffect(() => {
        dispatch(fetchAllBeneficiaries())
    }, [dispatch])

    const handleDelete = (id) => {
        setSelectedId(id)
        setShowModal(true)
    }

    const confirmDelete = () => {
        dispatch(deleteExistingBeneficiary(selectedId))
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
        <div className="home-container">
            <div className="page-header">
                <Breadcrumb /> {/* Add this line */}
                <Link to="/add" className="add-btn">Add New Beneficiary</Link>
            </div>


            <div className="beneficiary-list">
                {beneficiaries.length === 0 ? (
                    <p>No beneficiaries found. Add one to get started.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>Country</th>
                                <th>Pincode</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {beneficiaries.map(beneficiary => (
                                <tr key={beneficiary.id}>
                                    <td>{beneficiary.id}</td>
                                    <td>{beneficiary.fullName}</td>
                                    <td>{beneficiary.country}</td>
                                    <td>{beneficiary.pincode}</td>
                                    <td className="actions">
                                        <Link to={`/edit/${beneficiary.id}`} className="edit-btn" title="Edit">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                        <Link to={`/view/${beneficiary.id}`} className="view-btn" title="View">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                        <button onClick={() => handleDelete(beneficiary.id)} className="delete-btn" title="Delete">
                                            <i class="fa-solid fa-trash"></i>
                                        </button>


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

export default Home