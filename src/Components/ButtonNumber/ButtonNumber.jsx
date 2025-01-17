import './buttonNumber.css'
import flag from '../../assets/flag-russia.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function ButtonNumber( { startnumber, endnumber, items} ) {
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
                {/* <div className="firstNumberDiv">
                    <div className="leftDiv">
                        <p>A{startnumder}AA</p>
                    </div>
                    <div className="rightDiv">
                        <span>34</span>
                        <div className='regionDiv'>
                            <span>rus</span>
                            <img src={flag} alt="flag russia" />
                        </div>
                    </div>
                </div>

                <div className="secondNumberDiv">
                    <div className="leftDiv">
                        <p>A{endnumber}AA</p>
                    </div>
                    <div className="rightDiv">
                        <span>34</span>
                        <div className='regionDiv'>
                            <span>rus</span>
                            <img src={flag} alt="flag russia" />
                        </div>
                    </div>
                </div> */}



                {/* one number */}
            <div className='leftDiv'>
                <span>A{startnumber}-{endnumber}AA</span>
            </div>

            <div className="rightDiv">
                <span>34</span>
                <div className='regionDiv'>
                    <span>RUS</span>
                    <img src={flag} alt="flag russia" />
                </div> 
            </div>
        </button>

        <div className={`numberList ${!isOpen ? "active" : ""}`} >
            {items.map((item) => (
                <Link className='btn' to={'/item'} key={item.id}>X{item.startName}-{item.endName}XX</Link>
            ))}
        </div>
    </div>
)
}

export default ButtonNumber
