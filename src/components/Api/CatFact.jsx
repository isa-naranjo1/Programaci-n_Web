export const getFact = async() =>{
    try {
        const response = await fetch('https://catfact.ninja/fact?max_length=140')
        const data = await response.json();
        console.log(data.fact)
        console.log("hehcos sobre gato" + data.fact);
        return data.fact
        
    } catch (error) {
        console.error('There was an error getting the fact', error)
        return 
    }
}