import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ userToEdit, handleDelete, updateCustomer }) => {
    const navigate = useNavigate();
  
    const [editForm, setEditForm] = useState({
      address: "",
      email: "",
      password: "",
      phone: "",
      username: ""
    });
  
    const [initialForm, setInitialForm] = useState({});
  
    useEffect(() => {
      // Set the initial form state when userToEdit changes
      setEditForm({
        address: userToEdit.address,
        email: userToEdit.email,
        password: userToEdit.password,
        phone: userToEdit.phone,
        username: userToEdit.username
      });
  
      // Save the initial form state for comparison
      setInitialForm({
        address: userToEdit.address,
        email: userToEdit.email,
        password: userToEdit.password,
        phone: userToEdit.phone,
        username: userToEdit.username
      });
    }, [userToEdit]);
  
    const onDeleteClick = () => {
      handleDelete(editForm);
      navigate('/admin');
    };
  
    const onChange = (e) => {
      const { name, value } = e.target;
      setEditForm({ ...editForm, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Compare the form state to the initial state
      const hasChanged = Object.keys(editForm).some(
        (key) => editForm[key] !== initialForm[key]
      );
  
      if (hasChanged) {
        updateCustomer({ id: userToEdit.id, ...editForm });
      } else {
        // Handle case where no changes are made
        console.log("No changes detected");
      }
    };
  
    return (
      <div>
        Edit
        <button onClick={onDeleteClick} value={userToEdit.id}>
          Delete User
        </button>
        <form onSubmit={handleSubmit}>
            <label>Username
                <input type="text" name="username" placeholder={userToEdit.username} defaultValue={editForm.username} onChange={onChange}/>
            </label>
            <br />
            <label>Password
            <input type="text" name="password" placeholder={userToEdit.password} defaultValue={editForm.password} onChange={onChange}/>
            </label>
            <br />
            <label>Address
            <input type="text" name="address" placeholder={userToEdit.address} defaultValue={editForm.address} onChange={onChange}/>
            </label>
            <br />
            <label>Email
            <input type="text" name="email" placeholder={userToEdit.email} defaultValue={editForm.email} onChange={onChange}/>
            </label>
            <br />
            <label>Phone
            <input type="text" name="phone" placeholder={userToEdit.phone} defaultValue={editForm.phone} onChange={onChange}/>
            </label>
            <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Edit;