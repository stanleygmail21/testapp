const token = localStorage.getItem('auth');

async function withdraw(data)  {
    return fetch(`http://54.242.195.138:8080/api/v1/me/withdraw`,
    {
        method: 'POST',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://54.242.195.138:8080/api/v1/me/withdraw"
        },
        body: JSON.stringify(data)

    })
    .then (response => response.json())
}

export default withdraw;