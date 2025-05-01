import {
    fetchBeneficiaries,
    addBeneficiary,
    updateBeneficiary,
    deleteBeneficiary
} from '../../api/mockApi'

export const fetchAllBeneficiaries = () => fetchBeneficiaries()
export const addNewBeneficiary = (beneficiary) => addBeneficiary(beneficiary)
export const updateExistingBeneficiary = (id, beneficiary) => updateBeneficiary(id, beneficiary)
export const deleteExistingBeneficiary = (id) => deleteBeneficiary(id)