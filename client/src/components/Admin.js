import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Admin = ({ handleSearch, searchResult, editId }) => {
    
    const [searchQuery, setSearchQuery] = useState("")
    const [editing, setediting] = useState(false)
    const navigate = useNavigate()

    const onClick = () => {
        handleSearch(searchQuery)
    }

    const handleEditClick = (customerId) => {
        editId(customerId)
        navigate('/edit')
      };

    return (
        <div>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button onClick={onClick}>Search</button>
            <ul>
                {searchResult.map((customer) => (
                <li key={customer.id}>
                    {customer.username}<button onClick={() => handleEditClick(customer.id)}>Edit</button>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Admin