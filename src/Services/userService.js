const token = localStorage.getItem('auth');

export async function getMe()  {
    return fetch(`http://localhost:8000/api/v1/me`,
    {
        method: 'GET',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://localhost:8000/api/v1/me"
        
        },
    })
    .then (response => response.json())
}

