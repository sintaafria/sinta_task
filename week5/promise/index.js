const search = document.getElementById('search');
let keyword = '';

const fetchNews = key => {
    fetch(`https://newsapi.org/v2/top-headlines?country=id&q=${key}&apiKey=97eded16c9be454d967dcce41964dcb8`)
    .then(res => res.json())
    .then(res => render(res));
}

function render(data) {
    const element = document.getElementById("list-item");
    const articles = data.articles;
    let item = "";
    articles.forEach(i => {
        const date = i.publishedAt.split("T")[0].split("-");
		item += `<a href=${i.url}>
                <div class="col my-3">
                    <div class="card">
                        <img src=${i.urlToImage} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-text">${i.title}</h5>
                            <p class="card-text">${i.author} - ${date[2]}/${date[1]}/${date[0]}</p>
                            <p class="card-text">${i.description}</p>
                        </div>
                    </div>
                </div></a>`;
        element.innerHTML = `<div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                            ${item} </div>`

	});
}
fetchNews(keyword);

search.addEventListener('input', res => {
    keyword = res.target.value;
    fetchNews(keyword);
});
