export const BigNumber = () => {
    const numbersArray = []
    numbersArray.push({
        id: 1, 
        startName: '001', 
        endName:  '099', 
        items: [
        {
        id: 1, 
        startName: '001', 
        endName: '009',
        },
        ]
    })

    for (let i = 10; i < 99; i+=10){
        numbersArray[0].items.push({
            id: i/10 + 1, 
            startName: String('0' + i), 
            endName: String('0' + (i+9)),
        })
    }
    for (let i = 100; i < 999; i+=100){
        numbersArray.push({
                id: i/100 + 1, 
                startName: String(i), 
                endName: String(i+99), 
                items: []
            })
            for (let j = 0; j < 99; j+=10){
            numbersArray[i/100].items.push({
                id: j/10 + 1, 
                startName: String(i+j), 
                endName: String(i+j+9),
            })
        }
        }
    
    return numbersArray;
}

