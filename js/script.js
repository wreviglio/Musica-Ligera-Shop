function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('clientes');
const url = 'https://randomuser.me/api/?results=20';

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let clientes = data.results;
        return clientes.map(function (cliente) {
            let div = createNode('div');
            let img = createNode('img');
            let p = createNode('p');
            img.src = cliente.picture.medium;
            p.innerHTML = `${cliente.name.first} ${cliente.name.last}`;
            div.style.width = '72px';
            div.style.margin = '0px 10px';

            append(div, img);
            append(div, p);
            append(ul, div);
        })
    })
    .catch(function (error) {
        console.log(error);
    });