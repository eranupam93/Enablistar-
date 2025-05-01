const ConfirmationModal = ({ show, onClose, onConfirm, title, message }) => {
    if (!show) return null

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>{title}</h3>
                <p>{message}</p>
                <div className="modal-actions">
                    <button onClick={onConfirm}>Confirm</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal