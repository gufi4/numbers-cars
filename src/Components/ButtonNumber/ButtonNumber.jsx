import './buttonNumber.css'
import flag from '../../assets/flag-russia.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function ButtonNumber( { startnumder, endnumber, items} ) {
    const [isOpen, setIsOpen] = useState(true)


return (
    <div className='bodyNumberDiv'>
        <button className='btnNumberDiv' 
        onClick={() => {
            setIsOpen(!isOpen); 
            setTimeout(() => {
                setIsOpen(true)}, 3000)
            }}>
            <div className='leftNumberDiv'>
                <p className='titleNumber'>{`X ${startnumder} - ${endnumber} XX`}</p>
            </div>

            <div className="rightNumberDiv">
                <p>34</p>
                <div className='regionDiv'>
                    <p>rus</p>
                    <img src={flag} alt="flag russia" />
                </div>
            </div>
        </button>

        <div className={`numberList ${!isOpen ? "active" : ""}`} >
            {items.map((item) => (
                <Link className='btn' to={'/item'} key={item.id}>X {item.startName} - {item.endName} XX</Link>
            ))}
        </div>
    </div>
)
}

export default ButtonNumber
