//import {Link} from 'react-router-dom'
import './itemPage.css'

//import foto_2 from '../../assets/foto-2.png'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react';
import {getItemsRange} from "../../Api/response.js";
import CarNumber from "../../Components/CarNumber/CarNumber.jsx";


function ItemPage() {
    const params = useParams();
    //const [isOpen, setIsOpen] = useState(true)
    const [numbersData, setNumbersData] = useState(['']);
    const [rangeOfNumbers, setRangeOfNumbers] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getItemsRange(params.id, params.numberName);

                setNumbersData(response);
                console.log(`response: ${response}`);
                setRangeOfNumbers(params.numberName);
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
                //<p>${rangeOfNumbers}</p>
                <CarNumberWithImageComponent items={numbersData} rangeOfNumbers={rangeOfNumbers}/>
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

function createArrayWithNumbersFromRange(start, end) {
    return [...Array(end - start + 1)].map((_, index) => {

        let number = start + index;
        while ((number).toString().length !== 3) {
            number = '0' + number;
        }
        return number;
    });
}

function CarNumberWithImageComponent({items, rangeOfNumbers}) {
    let startNumber = rangeOfNumbers.slice(0, 3);
    let endNumber = rangeOfNumbers.slice(4, 7);
    let array = createArrayWithNumbersFromRange(Number(startNumber), Number(endNumber));

    return (
        <div className='itemDiv'>
            {array.map((number, index) => {
                items.map((numberItem) => {
                    if (number === numberItem.car_number) {
                        array[array.indexOf(number)] = numberItem;
                    }
                });

                if (array[array.indexOf(number)] !== undefined) {

                    return <div key={index} className='item'><CarNumber carNumber={array[index]}/></div>
                    // return <div className='item' style={{backgroundImage: 'url(' + foto_2 + ')'}}>
                    //      <p key={index}>А{array[index]}AA 34</p>;
                    //  </div>
                } else {
                    return <div className='imageItem' key={index}
                                style={{backgroundImage: 'url(' + array[index].image + ')'}}>
                        <CarNumber carNumber={array[index].car_number}/>
                    </div>
                }
            })}
        </div>
    )
}

export default ItemPage
