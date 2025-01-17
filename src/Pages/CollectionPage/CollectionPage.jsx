import { useParams } from 'react-router-dom'
import './collectionPage.css'
import { useEffect } from 'react';
import { getCollection } from '../../Api/response';
import { useState } from 'react';
import { BigNumber} from '../../models/BtnNumber';
import ButtonNumber from '../../Components/ButtonNumber/ButtonNumber';
// import Axios  from 'axios';
// import { DOMEN } from '../../Api/DOMEN';


function CollectionPage() {
    const params = useParams()

    const [apiData, setApiData] = useState(['']);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCollection(params.id);

                setApiData(response);
                console.log(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
            };
            fetchData();
        }, [params.id]);


return (
    <>
    {loading ? (
        <p>Loading...</p>
    ) : (
        <MyComponent data={apiData} />
    )
    }
    </>
);
};

const MyComponent = ( data ) => {
    const collection = data.data;
        const [nums] = useState(BigNumber);
        

        // useEffect(() => {
        //     const fetchNumbers =  () => {
        //         const autoNumbers =  BigNumber();
        //         setNumbers(autoNumbers);

        //     };
        //     fetchNumbers();
            
        // }, [nums]);

    return (
        <div className='collectionDiv'>
            <div className="titleDiv">
                <p className='titleCollection'>{collection.name}</p>
                <p className='titleCollection'>{collection.description}</p>
            </div>

            <div className="btnCollectionDiv">
                {nums.map((item) => console.log('item: ', item))}

            
                
                {nums.map((item) => (
                    <ButtonNumber 
                    key={item.id}  
                    startnumder={item.startName} 
                    endnumber={item.endName}
                    items={item.items}
                    />
                ))}
            </div>
        </div>
        
    )
}

export default CollectionPage