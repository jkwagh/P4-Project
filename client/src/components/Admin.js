import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import "./Edit.css"

const Admin = ({ handleSearch, searchResult, editId }) => {
    
    const [searchQuery, setSearchQuery] = useState("")
    const [editing, setediting] = useState(false)
    const navigate = useNavigate()

    const onClick = () => {
        handleSearch(searchQuery)
        console.log(searchQuery)
    }

    const handleEditClick = (customerId) => {
        editId(customerId)
        navigate('/edit')
      };

    return (
        <div>
            <NavBar />
            <h1>Admin View</h1>
            <h3>Search for a Customer to Edit</h3>
            <label>Enter Customer Name:
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button onClick={onClick}>Search</button>
            <ul className="list">
                {searchResult.map((customer) => (
                <li key={customer.id}>
                    {customer.username}<button className="but" onClick={() => handleEditClick(customer.id)}>Edit</button>
                </li>
                ))}
            </ul>
            </label>
        </div>
    )
}

export default Admin