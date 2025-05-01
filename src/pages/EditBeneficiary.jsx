import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import BeneficiaryForm from '../components/BeneficiaryForm'
import { fetchAllBeneficiaries, updateExistingBeneficiary } from '../features/beneficiaries/beneficiariesSlice'
// import { updateExistingBeneficiary, fetchAllBeneficiaries } from '../features/user/beneficiariesSlice'

const EditBeneficiary = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { beneficiaries } = useSelector(state => state.beneficiaries)
    const beneficiary = beneficiaries.find(b => b.id === Number(id))

    useEffect(() => {
        if (beneficiaries.length === 0) {
            dispatch(fetchAllBeneficiaries())
        }
    }, [dispatch, beneficiaries.length])

    const onSubmit = (data) => {
        dispatch(updateExistingBeneficiary({ id: Number(id), beneficiary: data }))
            .unwrap()
            .then(() => {
                alert('Beneficiary updated successfully!')
                navigate('/')
            })
            .catch(error => {
                alert(`Error: ${error.message}`)
            })
    }

    if (!beneficiary) return <div>Loading...</div>

    return (
        <div className="page-container">
            <h2>Edit Beneficiary</h2>
            <BeneficiaryForm
                onSubmit={onSubmit}
                defaultValues={beneficiary}
                buttonText="Update Beneficiary"
            />
        </div>
    )
}

export default EditBeneficiary