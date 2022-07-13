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
                let fechatoStr = publishDate+"";
                var fecha = new Date(fechatoStr); 
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let dia = fecha.getDate();
                let mesl = months[fecha.getMonth()];
                let anio = fecha.getFullYear();

                
                contentHTML+=`            
                <div class="col-md-4 card" id="divcontent">
                    <a href="${urlImageHero}" target="_blank">
                        <img src="${pub.thumbnail.path}.${pub.thumbnail.extension}" alt="${pub.title}" class="img-thumbnail" style="width:300px;height:400px;">
                    </a>
                    <h4 class="title">Title: ${pub.title}</h4>
                    <p class"publish-date">Published: ${mesl} ${dia}, ${anio}</p>                
                    <section>
                            <span id = "contarLike">0</span>
                            <button class="buttonLD like${pub.id}" id = "btnL${pub.id}"><span class="spanB"></span>Like</button>
                            <span id = "contardislike">0</span>
                            <button class="buttonLD dislike" id = "btndislike"><span class="spanB"></span>Dislike</button>
                            
                    </section>
                    <br>
                </div>`;
                let idc = pub.id;
                let contarL = 0;
                let contarD = 0;
                const valLike = document.getElementById('contarLike').value;
                const valDislike = document.getElementById('contardislike');
                const botones = document.querySelectorAll('.buttonLD');
                const btnL = document.getElementById('btnlike');
                const btnD = document.getElementById('btndislike');

                botones.forEach(boton=>{
                    boton.addEventListener('onclick', function(e){
                        console.log(boton);
                        const estilos = e.currentTarget.classList;
                        console.log(estilos);

                        if (estilos.constains('like'+idc)) {
                            console.log(estilos);
                            contarL++;
                        }
                        valLike.textContent = contarL;
                    })
                })
                
            }
            container.innerHTML = contentHTML;
        })
    }
};

marvel.render();
