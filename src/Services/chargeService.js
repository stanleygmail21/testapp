const token = sessionStorage.getItem('auth');

async function charge(id, data)  {
    return fetch(`http://3.95.231.42:8080/api/v1/bookings/charge/${id}`,
    {
        method: 'POST',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://3.95.231.42:8080/api/v1/bookings"
        
        },
        body: JSON.stringify(data)
    })
    .then (response => response.json())
}

export default charge;