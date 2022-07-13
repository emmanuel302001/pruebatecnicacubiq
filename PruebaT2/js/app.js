const marvel = {
    render:()=>{
        const urlAPI = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b5dd158dd0e856443db7fb726fbc6bc9&hash=80182fcb24c6426319114b9e34eafed6';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            console.log(json,'RES.JSON');
            for (const pub of json.data.results) {
                let urlImageHero = pub.urls[0].url;
                let publishDate = pub.dates[0].date;
                var fecha = new Date();
            

                
                contentHTML+=`            
                <div class="col-md-4">
                    <a href="${urlImageHero}" target="_blank">
                        <img src="${pub.thumbnail.path}.${pub.thumbnail.extension}" alt="${pub.title}" class="img-thumbnail" style="width:300px;height:400px;">
                    </a>
                    <h4 class="title">Title: ${pub.title}</h4>
                    <p class"publish-date">Published: ${publishDate}</p>
                    
                    <section>
                        <div>
                            <span = "contarLike">0</span>
                            <button class="buttonLD" id = "btnlike"><span class="spanB"></span>Like</button>
                            <span = "contardislike">0</span>
                            <button class="buttonLD" id = "btndislike"><span class="spanB"></span>Dislike</button>
                            
                        </div
                    </section>
                    <br>
                </div>`;
                let contarL = 0;
                let contarD = 0;
                const valLike = document.getElementById('contarLike');
                const valDislike = document.getElementById('contardislike');
                const btnL = document.getElementById('btnlike');
                const btnD = document.getElementById('btndislike');
                
            }
            container.innerHTML = contentHTML;
        })
    }
};

marvel.render();
