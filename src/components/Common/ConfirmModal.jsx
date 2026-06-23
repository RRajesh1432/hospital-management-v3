function ConfirmModal({ title, message, onConfirm }) {
  const confirmDelete = () => {
    if (window.confirm(message)) {
      onConfirm();
    }
  };

  return (
    <button className="btn btn-danger btn-sm" onClick={confirmDelete}>
      Delete
    </button>
  );
}

export default ConfirmModal;
