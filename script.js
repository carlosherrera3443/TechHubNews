document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '46ecef0996d14ae48ead7ee33293d5f1';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`;
    const newsContainer = document.getElementById('news-container');

    async function getTechNews() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            const articles = data.articles;

            articles.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Leggi di più</a>
                `;
                newsContainer.appendChild(newsItem);
            });
        } catch (error) {
            console.error('Errore nel recupero delle notizie:', error.message);
        }
    }

    getTechNews();
});
