import './carNumber.css'
import flag from '../../assets/flag-russia.svg'

function CarNumber( { carNumber, opasity } ) {


return (
    <div className='carNumberDiv' style={{opacity: {opasity}}}>
            <div className='leftDiv'>
                <span>A{carNumber}AA</span>
            </div>

            <div className="rightDiv">
                <span>34</span>
                <div className='regionDiv'>
                    <span>RUS</span>
                    <img src={flag} alt="flag russia" />
                </div> 
            </div>
    </div>
)
}

export default CarNumber