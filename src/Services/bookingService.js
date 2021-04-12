const token = sessionStorage.getItem('auth');

export async function getMyBookings()  {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}api/v1/me/bookings`,
    {
        method: 'GET',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":`${process.env.REACT_APP_API_BASE_URL}api/v1/me/bookings`
        
        },
    })
    .then (response => response.json())
}

