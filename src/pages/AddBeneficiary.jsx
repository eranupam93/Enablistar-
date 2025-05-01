import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BeneficiaryForm from '../components/BeneficiaryForm'
import { addNewBeneficiary } from '../features/beneficiaries/beneficiariesSlice'
// import { addNewBeneficiary } from '../features/user/beneficiariesSlice'

const AddBeneficiary = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        dispatch(addNewBeneficiary(data))
            .unwrap()
            .then(() => {
                alert('Beneficiary added successfully!')
                navigate('/')
            })
            .catch(error => {
                alert(`Error: ${error.message}`)
            })
    }

    return (
        <div className="page-container">
            <h2>Add New Beneficiary</h2>
            <BeneficiaryForm onSubmit={onSubmit} buttonText="Add Beneficiary" />
        </div>
    )
}

export default AddBeneficiary