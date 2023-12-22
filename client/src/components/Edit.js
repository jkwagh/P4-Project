import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import "./Edit.css";

const Edit = ({ userToEdit, handleDelete, updateCustomer, fetchResult }) => {
    const navigate = useNavigate();
    useEffect(() => {
      if (fetchResult === true) {
          navigate('/admin')
          }
  }, [fetchResult])

    const [editForm, setEditForm] = useState({
      address: "",
      email: "",
      password: "",
      phone: "",
      username: "",
      id: 0,
    });
  
    const [initialForm, setInitialForm] = useState({});
  
    useEffect(() => {
      // Set the initial form state when userToEdit changes
      setEditForm({
        address: userToEdit.address,
        email: userToEdit.email,
        password: userToEdit.password,
        phone: userToEdit.phone,
        username: userToEdit.username,
        id: userToEdit.id
      });
  
      // Save the initial form state for comparison
      setInitialForm({
        address: userToEdit.address,
        email: userToEdit.email,
        password: userToEdit.password,
        phone: userToEdit.phone,
        username: userToEdit.username,
        id: userToEdit.id
      });
    }, [userToEdit]);
  
    const onDeleteClick = () => {
      handleDelete(editForm);
    };
  
    const onChange = (e) => {
      const { name, value } = e.target;
      setEditForm({ ...editForm, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      const hasChanged = Object.keys(editForm).some(
        (key) => editForm[key] !== initialForm[key]
      );
  
      if (hasChanged) {
        updateCustomer({ id: userToEdit.id, ...editForm });
      } else {
        console.log("No changes detected");
      }
    };
  
    return (
      <div>
        <NavBar />
        <h1>Edit User Information</h1>
        <button onClick={onDeleteClick} value={userToEdit.id}>
          Delete User
        </button>
        <form className="edit-form" onSubmit={handleSubmit}>
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