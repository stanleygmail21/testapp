export async function signIn(data)  {
    return fetch(`http://3.95.231.42:8080/api/v1/login`,
    {
        method: 'POST',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://3.95.231.42:8080/api/v1/login"
        },
        body: JSON.stringify(data)

    })
    .then (response => response.json())
}

export async function signUp(data)  {
    return fetch(`http://3.95.231.42:8080/api/v1/register`,
    {
        method: 'POST',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://3.95.231.42:8080/api/v1/register"
        },
        body: JSON.stringify(data)

    })
    .then (response => response.json())
}

