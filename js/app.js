/* para que mi navbar cambie de color, agrego una clase que luego la llamo en mis hoja de estilos */
$(window).scroll(function(){
  $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
});

/* para que cuando seleccione un nav item vuelva para arriba  */
$(document).ready(function(){
  $(".nav-item").click(function () {
      $(".navbar-toggler").click();
    });
  });
  


/* cuenta regresiva */
var count=new Date('oct 15,2020 00:00:00').getTime();
var x=setInterval(function(){
  var now =new Date().getTime();
  var d = count - now;
  var days = Math.floor(d/(1000*60*60*24));
  var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
  var minutes = Math.floor((d%(1000*60*60))/(1000*60));
  var seconds=Math.floor((d%(1000*60))/1000);

  document.getElementById('days').innerHTML=days;
  document.getElementById('hours').innerHTML=hours;
  document.getElementById('minutes').innerHTML=minutes;
  document.getElementById('seconds').innerHTML=seconds;
 

},1000);






particlesJS(
  {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 18,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "top",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);






















 // explicacion paso a paso

 //1= creo mis variables por ejemplo l creo la variable const( cons es un tipo de  vaiable que no se puede moficiar ni pisar) y le digo que del documento me seleccione el elemento que tenga la clase hamgurugeer.
 // nota de color si lo quiero que me tome una clase tengo que poner '.nombreDeLaClase', y para id es '#nombreDelId' y hay millones de otras mas pero bue
 //2= Registra un evento a un objeto en específico. addEventListener es muy poderosa porque yo puedo tener poder de muchos comandos y de muchos eventos en mi codigo. en este caso le estoy diciendo que cuando en la variable amburger se haga click,  haga lo que le paso en la funcion en este cao le digo cuando hagas click altername la clase  nav links a open y con esa funcion nos va a leer el codigo que tenemos para css con la clase open.


 //algo interesante ()=>{ esa es una manera de escribir una funcion anonima.
