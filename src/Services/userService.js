const token = sessionStorage.getItem('auth');

export async function getMe()  {
    return fetch(`http://3.95.231.42:8080/api/v1/me`,
    {
        method: 'GET',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://3.95.231.42:8080/api/v1/me"
        
        },
    })
    .then (response => response.json())
}

