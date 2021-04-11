const token = localStorage.getItem('auth');

export async function getProducts()  {
    return fetch(`http://54.242.195.138:8080/api/v1/products`,
    {
        method: 'GET',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://54.242.195.138:8080/api/v1/products"
        
        },
    })
    .then (response => response.json())
}

export async function getMyProducts()  {
    return fetch(`http://54.242.195.138:8080/api/v1/me/products`,
    {
        method: 'GET',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://54.242.195.138:8080/api/v1/products"
        
        },
    })
    .then (response => response.json())
}

export async function createMyProduct(data)  {
    return fetch(`http://54.242.195.138:8080/api/v1/me/products`,
    {
        method: 'POST',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://54.242.195.138:8080/api/v1/me/products"
        },
        body: JSON.stringify(data)
    })
    .then (response => response.json())
}

export async function getProduct(id)  {
    return fetch(`http://54.242.195.138:8080/api/v1/products/${id}`,
    {
        method: 'GET',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://54.242.195.138:8080/api/v1/products"
        
        },
    })
    .then (response => response.json())
}

export async function getMyProduct(id)  {
    return fetch(`http://54.242.195.138:8080/api/v1/products/${id}`,
    {
        method: 'GET',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://54.242.195.138:8080/api/v1/products"
        
        },
    })
    .then (response => response.json())
}

export async function updateMyProduct(id, data)  {
    return fetch(`http://54.242.195.138:8080/api/v1/me/products/${id}`,
    {
        method: 'PATCH',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://54.242.195.138:8080/api/v1/me/products"
        },
        body: JSON.stringify(data)
    })
    .then (response => response.json())
}


export async function deleteMyProduct(id)  {
    return fetch(`http://54.242.195.138:8080/api/v1/me/products/${id}`,
    {
        method: 'DELETE',
        mode: 'cors',
        headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://54.242.195.138:8080/api/v1/me/products"
        
        },
    })
    .then (response => response.json())
}