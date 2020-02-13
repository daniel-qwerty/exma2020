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
        slideCount:0,
        slideCountS:0,
        sw: 0,
        next: null,
        prev: null,
        powerContentIndex:0,
        showDecriptionPower:false
    },
    methods: {
        sendContact(){
            if(this.nombre != null && this.apellido != null && this.email != null && this.mensaje != null){
                axios
                .post('https://hooks.zapier.com/hooks/catch/6703116/odety42/', {
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
        nextSlide2(){
            if(this.slideCount < this.data.slidesExperience.length-1){
                this.slideCount++;
                console.log(this.slideCount);
            }else{
               if(this.slideCount >= 1){
                this.slideCount--;
                console.log(this.slideCount);
            } 
            }
            
        },
        prevSlide(){
            if(this.slideCount >= 1){
                this.slideCount--;
                console.log(this.slideCount);
            }
            
        },
        nextSponsor(){
            console.log(this.slideCountS);
            if(this.slideCountS < this.data.sponsors.length-1){
                this.slideCountS++;
               
            }
            
        },
        prevSponsor(){
            console.log(this.slideCountS);
            if(this.slideCountS >= 1){
                this.slideCountS--;
              
            }
            
        },
        autoNext() {
            
          if (this.sw === 0) {
            if (this.slideCountS < this.data.sponsors.length-1) {
              this.slideCountS++;

              //this.logos = this.paginator(this.obj, this.offsetNew).data;
            } else {
              this.sw = 1;
            }
          } else {
            if (this.slideCountS >= 1) {
              this.slideCountS--;

              //this.logos = this.paginator(this.obj, this.offsetNew).data;
            } else {
              this.sw = 0;
            }
          }
        },
        stopCarusel() {
          clearInterval(this.next);
        },
        startCarusel() {
          this.next = setInterval(() => this.autoNext(), 6000);
        },
        showIcon1(){
            this.powerContentIndex = 0;
            this.showDecriptionPower = true;
        },
        showIcon2(){
            this.powerContentIndex = 1;
            this.showDecriptionPower = true;
        },
        showIcon3(){
            this.powerContentIndex = 2;
            this.showDecriptionPower = true;
        },
        showIcon4(){
            this.powerContentIndex = 3;
            this.showDecriptionPower = true;
        },
        showIcon5(){
            this.powerContentIndex = 4;
            this.showDecriptionPower = true;
        },
        closeDescription(){
            this.showDecriptionPower = false;
        }
    },
    mounted() { 
        axios.get("data.json").then(response => {
            this.data = (response.data);
            this.next = setInterval(() => this.autoNext(), 6000);
        });

         
          
    }
});