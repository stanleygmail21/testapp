const token = sessionStorage.getItem('auth');

export async function getMe()  {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}api/v1/me`,
    {
        method: 'GET',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":`${process.env.REACT_APP_API_BASE_URL}api/v1/me`
        
        },
    })
    .then (response => response.json())
}

