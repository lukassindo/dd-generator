const roll = () => {
    let featuresNumbers = []
    let rolls = 0 
    while(rolls < 6)  {

        let results = [];
        let i = 0
        while(i < 4) {
            let k6 = Math.floor(Math.random() *6) + 1;
            results.push(k6);
            i++;
        }
        
        results
            .sort((a, b) => a - b)
            .shift()

        const sum = results.reduce((total, num) => {
            return total + num;
        })

        featuresNumbers.push(sum);
        rolls++;
       
    }

    return featuresNumbers;
}

export default {
    roll,
}