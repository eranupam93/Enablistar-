import { useForm } from 'react-hook-form'

const BeneficiaryForm = ({ onSubmit, defaultValues, buttonText = "Submit" }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ defaultValues })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="beneficiary-form">
            <div className="form-group">
                <label>Full Name</label>
                <input
                    {...register('fullName', { required: 'Full Name is required' })}
                    className={errors.fullName ? 'error' : ''}
                />
                {errors.fullName && <span className="error-message">{errors.fullName.message}</span>}
            </div>

            <div className="form-group">
                <label>Address</label>
                <textarea
                    {...register('address', { required: 'Address is required' })}
                    className={errors.address ? 'error' : ''}
                />
                {errors.address && <span className="error-message">{errors.address.message}</span>}
            </div>

            <div className="form-group">
                <label>Country</label>
                <select
                    {...register('country', { required: 'Country is required' })}
                    className={errors.country ? 'error' : ''}
                >
                    <option value="">Select Country</option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="India">India</option>
                </select>
                {errors.country && <span className="error-message">{errors.country.message}</span>}
            </div>

            <div className="form-group">
                <label>Pincode</label>
                <input
                    type="text"
                    {...register('pincode', {
                        required: 'Pincode is required',
                        pattern: {
                            value: /^\d+$/,
                            message: 'Pincode must be numeric'
                        }
                    })}
                    className={errors.pincode ? 'error' : ''}
                />
                {errors.pincode && <span className="error-message">{errors.pincode.message}</span>}
            </div>

            <button type="submit" className="submit-btn">{buttonText}</button>
        </form>
    )
}

export default BeneficiaryForm