let link = `http://localhost:3001/circles`;
fetch(link, {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    
    .then(response => {
        console.log(response);

        let ul = document.querySelector('#imgs');

        for (const item of response) {
            let element = 
            `<div style="" class="element-${item.id}">
                <img style="border-color:${item.color}; alt="${item.name}" src="${item.image}">
                <span>${item.name}</span>
            </div>`;
            ul.innerHTML += element;
        }

        
        
    })
    .catch(err => {
        alert("sorry, there are no results for your search")
    });
