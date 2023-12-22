import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Admin = ({ handleSearch, searchResult, editId }) => {
    
    const [searchQuery, setSearchQuery] = useState("")
    const [editing, setediting] = useState(false)
    const navigate = useNavigate()

    const onClick = () => {
        handleSearch(searchQuery)
        console.log(searchQuery)
    }

    const handleEditClick = (customerId) => {
        console.log(customerId)
        editId(customerId)
        navigate('/edit')
      };

    return (
        <div>
            <h1>Admin View</h1>
            <h3>Search for a Customer to Edit</h3>
            <label>Enter Customer Name:
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button onClick={onClick}>Search</button>
            <ul>
                {searchResult.map((customer) => (
                <li key={customer.id}>
                    {customer.username}<button onClick={() => handleEditClick(customer.id)}>Edit</button>
                </li>
                ))}
            </ul>
            </label>
        </div>
    )
}

export default Admin