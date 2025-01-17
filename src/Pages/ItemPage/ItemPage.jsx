import { Link } from 'react-router-dom'
import './itemPage.css'

import foto from '../../assets/foto.png'
import foto_2 from '../../assets/foto-2.png'
import { useState } from 'react'

const items = ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010' ]


function ItemPage() {
    const [isOpen, setIsOpen] = useState(true)

return (
    <>
    {isOpen ? (
        <div className='itemDiv'>
        {items.map((item) => (
            <Link className='link' onClick={() => setIsOpen(!isOpen)} key={item}>
            <div className='item' style={{backgroundImage: 'url(' + foto + ')'}}>
                <p>item - {item}</p>
            </div>
        </Link>
        ))}
    </div>
    ) : (
        <div className='itemOpen' style={{backgroundImage: 'url(' + foto_2 + ')'}}>
            <p>item - </p>
        </div>
    )}
    </>
)
}

export default ItemPage
