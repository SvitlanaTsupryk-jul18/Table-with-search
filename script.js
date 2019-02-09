 axios.get('https://localhost:8080')
//axios.get(`https://ma-cats-api.herokuapp.com/api/cats`)

    .then(function (response) {
        let persons = response.data;
        //let persons = response.data.cats;
        addinTable(persons);
        searcher(persons);
        pagination(persons);
    })
    .catch(function (error) {
        console.log(error);
    });

//pagination

function pagination(personArr) {
    let paginationButton = document.querySelector('.pagination');
    let page = 0;
    paginationButton.addEventListener('click', function (e) {
        if (e.target.className === 'next') {
            page += 1;
        }
        if (e.target.className === 'prev') {
            page === 0 ? page = 0 : page -= 1;
        }
        addinTable(personArr, page);
    });
}

//make table

function addinTable(personArr, page = 0) {

    let table = document.querySelector('table');
    let tbody = table.querySelector('tbody');
    let pageNum = document.querySelector('.pagenumber');

    tbody.innerHTML = "";
    for (let i = 0 + page * 10; i < 10 + page * 10; i++) {
        tbody.innerHTML += `<tr><td> ${personArr[i].name}</td><td>${personArr[i].email}</td><td>${personArr[i].funds}</td><td>${personArr[i].city}</td><td>${personArr[i].city}</td>phone</tr>`;
        //tbody.innerHTML += `<tr><td> ${personArr[i].name}</td><td>${personArr[i].price}</td><td>${personArr[i].category}</td><td>${personArr[i].id}</td></tr>`;
    }
    table.appendChild(tbody);
    pageNum.innerHTML = page + 1;
}

//search

function searcher(personArr) {
    let input = document.querySelector('input');
    let wrapper = debounce(searchFilter, 500);
    input.addEventListener('input', wrapper);

    function searchFilter() {
        let query = this.value;
        let filteredPersons = personArr.filter(person => Object.values(person).includes(query));
        addinTable(filteredPersons, 0);
    }
}

function debounce(originalF, delay) {
    let timerId = 0;
    return function wrapper(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(
            originalF.bind(this, ...args),
            delay
        );
    };
}
