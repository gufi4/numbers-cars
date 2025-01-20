import './header.css'
import { useState, useEffect } from 'react'
import { getUsers} from '../../Api/response'

import {BiMenu} from 'react-icons/bi'
import { Link} from 'react-router-dom'


function Header() {
    const [isOpen, setIsOpen] = useState(true)
    const [collections, setCollections] = useState(['']);
    const [username, setUsername] = useState('Null username');


    const addCollection = () => {
        console.log('add collection')
    }


    useEffect(() => {
        getUsers.then((user) => {
            setCollections(user.collections);
            setUsername(user.username);
        })
    }, []);

return (
    <div className='headerDiv'>
        <span className='username'>{username}</span>
        
        <div className='menuDiv'>
            <button className='btnMenu' onClick={() => setIsOpen(!isOpen)}><BiMenu className='icon'/></button>

            <div className={`bodyMenu ${!isOpen ? "active" : ""}`}>
                <div className='titleMenu'>
                    <p>Твои коллекции:</p>
                </div>
                
                <div className='collectionList'>
                    {(collections).map((collection) => 
                    <Link to={`/collection/${collection.id}`} className='link' key={collection.id} onClick={() => setIsOpen(!isOpen)}>{collection.name}</Link> 
                        
                    )}

                    <button className='btnAddCollection' onClick={addCollection}>Создать коллекцию</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Header