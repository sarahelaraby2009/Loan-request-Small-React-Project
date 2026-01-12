export default function MyModal({ message, type,onClose }) {


    return (
        <div onClick={onClose} className="modal">
            <div onClick={(e)=>e.stopPropagation()} className="modal-content">
                <p style={{color:type==="success" ? "darkgreen" : "wheat"}}>{message}</p>

            </div>
        </div>
    )
}