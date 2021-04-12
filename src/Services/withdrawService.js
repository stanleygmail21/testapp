const token = sessionStorage.getItem('auth');

async function withdraw(data)  {
    return fetch(`http://3.95.231.42:8080/api/v1/me/withdraw`,
    {
        method: 'POST',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://3.95.231.42:8080/api/v1/me/withdraw"
        },
        body: JSON.stringify(data)

    })
    .then (response => response.json())
}

export default withdraw;