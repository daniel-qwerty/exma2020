const app = new Vue({
    el: "#app",
    data: {
        data: Object,
        nombre: null,
        apellido: null,
        email: null,
        mensaje: null,
        showMessage: false,
        message: null,
        slideCount:0
    },
    methods: {
        sendContact(){
            if(this.nombre != null && this.apellido != null && this.email != null && this.mensaje != null){
                axios
                .post('http://localhost:8080/api-rest/public/api/clientes/nuevo', {
                  nombre: this.nombre,
                  apellido: this.apellido,
                  email: this.email,
                  mensaje: this.mensaje,
                  web: "2020"
                })
                .then(res => {
                    this.showMessage = true;
                    this.message = "Su mensaje fue enviado";
                })
                .catch(function (error) {
                  console.log(error);
                  this.showMessage = true;
                  this.message = error;
                });
            } else {
                this.showMessage = true;
                this.message = "Todos los campos del formulario son obligatoiros";
            }
            
        },
        nextSlide(){
            if(this.slideCount < this.data.slidesExperience.length-1){
                this.slideCount++;
                console.log(this.slideCount);
            }
            
        },
        prevSlide(){
            if(this.slideCount >= 1){
                this.slideCount--;
                console.log(this.slideCount);
            }
            
        }
    },
    mounted() { 
        axios.get("data.json").then(response => {
            this.data = (response.data);
            console.log(this.data.titulo);
        });

         
          
    }
});