import './mainPage.css'
import Lottie from 'lottie-react'

import loading from '../../assets/loading.json'


function MainPage() {

return (
    <>
    <div className='main'>

        <div className='contentDiv'>
            <Lottie animationData={loading} loop={true} />
        </div>
    </div>
    </>
)
}

export default MainPage
