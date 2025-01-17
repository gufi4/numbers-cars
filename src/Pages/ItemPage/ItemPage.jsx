import {Link} from 'react-router-dom'
import './itemPage.css'

import foto from '../../assets/foto.png'
import foto_2 from '../../assets/foto-2.png'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react';
import {getItemsRange} from "../../Api/response.js";


const items = ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010']


function ItemPage() {
    const params = useParams();
    //const [isOpen, setIsOpen] = useState(true)
    const [numbersData, setNumbersData] = useState(['']);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getItemsRange(params.id, params.numberName);
                console.log(response);
                setNumbersData(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, [params.numberName, params.id]);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <CarNumberWithImageComponent data={numbersData}/>
            )

            }
        </>
    )
// return (
//     <>
//     {isOpen ? (
//         <div className='itemDiv'>
//         {items.map((item) => (
//             <Link className='link' onClick={() => setIsOpen(!isOpen)} key={item}>
//             <div className='item' style={{backgroundImage: 'url(' + foto + ')'}}>
//                 <p>item - {item}</p>
//             </div>
//         </Link>
//         ))}
//     </div>
//     ) : (
//         <div className='itemOpen' style={{backgroundImage: 'url(' + foto_2 + ')'}}>
//             <p>item - </p>
//         </div>
//     )}
//     </>
// )
}

const CarNumberWithImageComponent = (data) => {
    const items = data.data;
    console.log('items: ', items);

    return (
        <div className='itemDiv'>
            {items.map((item) => {
                console.log('item: ', item);
                return <div className='item' key={item.id} style={{backgroundImage: 'url(' + item.image + ')'}}>
                    <p>А{item.car_number}АА 34</p>
                </div>
            })}

        </div>
    )
}

export default ItemPage
