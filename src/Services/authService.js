export async function signIn(data)  {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}api/v1/login`,
    {
        method: 'POST',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":`${process.env.REACT_APP_API_BASE_URL}api/v1/login`
        },
        body: JSON.stringify(data)

    })
    .then (response => response.json())
}

export async function signUp(data)  {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}api/v1/register`,
    {
        method: 'POST',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":`${process.env.REACT_APP_API_BASE_URL}api/v1/register`
        },
        body: JSON.stringify(data)

    })
    .then (response => response.json())
}

