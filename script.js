async function getResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos')
    let request = await response.json();
    request = request.splice(60,10);
    console.log(request);

    for(let key in request) {
        document.querySelector('.posts').innerHTML += `
        <li class="post">
            <h4>${request[key].title}</h4>
            <img src="${request[key].url}" width="300">
        </li>
        `
    }

}

getResponse()


