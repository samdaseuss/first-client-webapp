const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

function getData(url) {
    ajax.open('GET', url, false);
    ajax.send();
    
    return JSON.parse(ajax.response);
}

const newsFeed = getData(NEWS_URL);
const ul = document.createElement('ul');

window.addEventListener('hashchange', function() {
    const id = location.hash.substring(1);

    const newsContent = getData(CONTENT_URL.replace('@id', id));

    container.innerHTML = 
        `<h1>${newsContent.title}</h1>` +
        // 네비게이션 용도로 작동할 UI 요소
        `<div>
            <a href="#">목록으로</a>
        </div>`
});

for(let i = 0; i < 10; i++) {
    const div = document.createElement('div');

    div.innerHTML = `
        <li>
            <a href = "#${newsFeed[i].id}">
                ${newsFeed[i].title} (${newsFeed[i].comments_count})
            </a>
        </li>
    `;

    ul.appendChild(div.firstElementChild); // ul.appendChild(div.children[0]);
}

container.appendChild(ul);
container.appendChild(content);