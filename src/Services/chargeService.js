const token = sessionStorage.getItem('auth');

async function charge(id, data)  {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}api/v1/bookings/charge/${id}`,
    {
        method: 'POST',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":`${process.env.REACT_APP_API_BASE_URL}api/v1/bookings`
        
        },
        body: JSON.stringify(data)
    })
    .then (response => response.json())
}

export default charge;