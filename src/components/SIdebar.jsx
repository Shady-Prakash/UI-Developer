import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo/the-godfather.svg'
import data from "../EmployeeData.json"

const SIdebar = () => {
    const [cardFilter, setCardFilter] = useState(0)
    const navigate = useNavigate();

    const handleSetCardFilter = (newCardFilter) => {
        setCardFilter(newCardFilter)
        navigate(`/dashboard/${newCardFilter}`)
      }
    

  return (
           <div style={{width:"300px"}} className="sidebar">
               <div className="top_section">
                   <img src={Logo} className="logo"/>
               </div>
               {
                   data.employees.map((item, index)=>(
                       <NavLink to={`/dashboard/${index}`} key={index} className='nav-link' style={{color: cardFilter === index ? 'aqua' : "white"}} onClick={() => handleSetCardFilter(index)}>
                           <div style={{display:"block"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
        
  )
}

export default SIdebar