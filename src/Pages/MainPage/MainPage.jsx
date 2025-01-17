import './mainPage.css'
import Lottie from 'lottie-react'

import startAnimation from '../../assets/start-animation.json'


function MainPage() {

return (
    <>
    <div className='main'>

        <div className='contentDiv'>
            <Lottie animationData={startAnimation} loop={true} />
        </div>
    </div>
    </>
)
}

export default MainPage
