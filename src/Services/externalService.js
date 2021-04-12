export async function getTestimonials(){
    let options = {
        method: 'GET',
        redirect: 'follow'
    }
    return fetch('https://testimonialapi.toolcarton.com/api', options).then(response => {
        return response.text();
    })
}