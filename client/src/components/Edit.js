import React, { useState } from "react";

const Edit = ({ userToEdit, handleDelete }) => {
    console.log(userToEdit)
    const [editForm, setEditForm] = useState([])
    const onDeleteclick = () => {
        handleDelete(userToEdit)
    }

    return (
    <div>Edit
        <button onClick={onDeleteclick} value={userToEdit.id}>Delete User</button>
    </div>
    
    );
}

export default Edit;