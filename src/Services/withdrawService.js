const token = sessionStorage.getItem('auth');

async function withdraw(data)  {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}api/v1/me/withdraw`,
    {
        method: 'POST',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":`${process.env.REACT_APP_API_BASE_URL}api/v1/me/withdraw`
        },
        body: JSON.stringify(data)

    })
    .then (response => response.json())
}

export default withdraw;