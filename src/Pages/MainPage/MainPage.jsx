import './mainPage.css'
import Lottie from 'lottie-react'

import startAnimation from '../../assets/start-animation.json'
import {useEffect, useState} from "react";
import {getUsers} from "../../Api/response.js";
import {Link} from "react-router-dom";


function MainPage() {

    const [user, setUser] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        try {
            getUsers.then((user) => {
                console.log('user: ', user);
                setUser(user);
                setIsLoaded(true);
            })
        } catch (error) {
            console.error(error);
        }


    }, []);
return (
    <>
    <div className='main'>

        <div className='myCollections'>
            <a className='myCollectionsString'>Мои коллекции: </a>
            <>
                {
                    isLoaded ?
                        <div className='userCollections'>
                            {
                                user.collections.map((collection) => (

                                    <Link className='collectionLink' to={`/collection/${collection.id}`} key={collection.id}>
                                        <div className='collectionItem' key={collection.id}>
                                            {collection.name}
                                            <div className='itemDescription'>{collection.description}</div>
                                        </div>
                                    </Link>

                                ))
                            }
                        </div>
                        :
                        <div>
                            <a>loading</a>
                        </div>
                }
            </>
        </div>

        <div className='contentDiv'>
            <Lottie animationData={startAnimation} loop={true} />
        </div>
    </div>
    </>
)
}

export default MainPage
