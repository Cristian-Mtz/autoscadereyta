let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

setTimeout(activeBanner, 3000);

function activeBanner() {
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  activeBanner();
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};


document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};

//Info de autos
axios.get(
  `https://docs.google.com/spreadsheets/d/e/2PACX-1vRwwWfoZAuujRT8ek5ivqKtvIEsLSVKnX20mXwLNrkNA0QptJ-z_2eVLbOhrsi2BIHN4D76VLxv9Xqx/pub?gid=0&single=true&output=csv`,
  {
    responseType: 'blob'
  }
).then((response) => {
  console.log(response.data)
  return Papa.parse(response.data, 
    {
      header: true,
      complete: function(results) {
        console.log(results.data)
        let cards = results.data;
        const sucursal_one = document.getElementById('sucursal_one');
        const sucursal_two = document.getElementById('sucursal_two');
        const premium = document.getElementById('premium');
        for (const card of cards) {
          let text = `Hola, me gustaría saber más información del auto con los siguientes datos: \n\n`+`- Nombre: ${card.Nombre}\n`+`- Serie: ${card.Serie}\n`+`- Año: ${card.Año}\n`+`- Sucursal: ${card.Sucursal}\n\n`+`¡Gracias!`;

          if (card.Sucursal === '1' && card.Vendido === 'no') {
            sucursal_one.innerHTML += `
              <div class="swiper-slide box">
                <img src="${card.Imagen}" alt="${card.Nombre}">
                <div class="content">
                    <h3>${card.Nombre}</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div class="price">${card.Precio}</div>
                    <a href="https://wa.me/527295158399?text=${encodeURIComponent(text)}" class="btn" target="_blank">Más Información</a>
                </div>
              </div>
            `
          }else if (card.Sucursal === '2' && card.Vendido === 'no'){
            sucursal_two.innerHTML += `
              <div class="swiper-slide box">
                <img src="${card.Imagen}" alt="${card.Nombre}">
                <div class="content">
                    <h3>${card.Nombre}</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div class="price">${card.Precio}</div>
                    <a href="https://wa.me/527295158399?text=${encodeURIComponent(text)}" class="btn" target="_blank">Más Información</a>
                </div>
              </div>
            `
          } 
          if (card.Prioridad === 'si' && card.Vendido === 'no'){
            premium.innerHTML += `
            <div class="swiper-slide box">
              <img src="${card.Imagen}" alt="${card.Nombre}">
              <div class="content">
                <h3>${card.Nombre}</h3>
                <div class="price"> <span>precio : </span>${card.Precio}</div>
                <p>
                    <span class="fas fa-circle"></span> Sucursal ${card.Sucursal}
                    <span class="fas fa-circle"></span> ${card.Año} <br/>
                    <span class="fas fa-circle"></span> ${card.Transmision}
                    <span class="fas fa-circle"></span> ${card.Kilometraje} km
                </p>
                <a href="https://wa.me/527295158399?text=${encodeURIComponent(text)}" class="btn" target="_blank">Más Información</a>
              </div>
            </div>
            `
          }
        }

        var swiper = new Swiper(".vehicles-slider", {
          grabCursor: true,
          centeredSlides: true,  
          spaceBetween: 20,
          loop:true,
          autoplay: {
            delay: 9500,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable:true,
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        });

        var swiper = new Swiper(".featured-slider", {
          grabCursor: true,
          centeredSlides: true,  
          spaceBetween: 20,
          loop:true,
          autoplay: {
            delay: 9500,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable:true,
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        });

        var swiper = new Swiper(".review-slider", {
          grabCursor: true,
          centeredSlides: true,  
          spaceBetween: 20,
          loop:true,
          autoplay: {
            delay: 9500,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable:true,
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        });
      }
    });
})

const form = document.getElementById("formWhats");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  window.location=`https://wa.me/527295158399?text=${encodeURIComponent(form.querySelector("#numberWhats").value)}`;
  console.log(form.querySelector("#numberWhats").value);
})

let tabs = document.querySelectorAll('.tabs__toggle'), contents = document.querySelectorAll('.tabs__content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
        contents.forEach((content) => {
              content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
              tab.classList.remove('is-active');
        });

        contents[index].classList.add ('is-active');
        tabs[index].classList.add('is-active');
  });
});
