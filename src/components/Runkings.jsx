const Rankings = () => {

    const getData = () => {
        fetch('https://api.opensea.io/api/v2/collections?offset=0&limit=20', {
            headers: { 'X-API-KEY': '295d10f713184bfcbcb05be51f7daa42' }
        })
        .then(res => res.json())
        .then(console.log)
        .catch(console.error);

    }
    return ( 
        <div>
            <h1>Rankings</h1>
            <button onClick={getData}>get</button>
        </div>
     );
}
 
export default Rankings;