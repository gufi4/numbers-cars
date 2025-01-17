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
                {/* two numbers */}
                <div className="NumberDiv">

                </div>



                {/* one number */}
            {/* <div className='leftNumberDiv'>
                <div className="titleNumberDiv">
                    <span>A</span>
                    <span className='titleNumber'>{startnumder}-{endnumber}</span>
                    <span>AA</span>
                </div>
                
            </div>

            <div className="rightNumberDiv">
                <span>34</span>
                
                <div className='regionDiv'>
                    <p>rus</p>
                    <img src={flag} alt="flag russia" />
                </div> 
            </div> */}
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
