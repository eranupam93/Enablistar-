let beneficiaries = [
    { id: 1, fullName: "Anupam", address: "Mumbai", country: "USA", pincode: "400058" },
    { id: 2, fullName: "Jane ", address: "456 Oak Ave", country: "UK", pincode: "737894" }
]

export const fetchBeneficiaries = () =>
    Promise.resolve([...beneficiaries])

export const addBeneficiary = (beneficiary) => {
    const newBeneficiary = { ...beneficiary, id: beneficiaries.length + 1 }
    beneficiaries.push(newBeneficiary)
    return Promise.resolve(newBeneficiary)
}

export const updateBeneficiary = (id, updates) => {
    beneficiaries = beneficiaries.map(b =>
        b.id === id ? { ...b, ...updates } : b
    )
    return Promise.resolve(beneficiaries.find(b => b.id === id))
}

export const deleteBeneficiary = (id) => {
    beneficiaries = beneficiaries.filter(b => b.id !== id)
    return Promise.resolve()
}