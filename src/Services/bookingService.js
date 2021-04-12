const token = sessionStorage.getItem('auth');

export async function getMyBookings()  {
    return fetch(`http://localhost:8000/api/v1/me/bookings`,
    {
        method: 'GET',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://localhost:8000/api/v1/me/bookings"
        
        },
    })
    .then (response => response.json())
}

