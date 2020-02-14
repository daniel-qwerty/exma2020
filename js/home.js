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
        showDecriptionPower:false,
        nombreSponsor: null,
        emailSponsor: null,
        telefonoSponsor: null,
        empresaSponsor:null,
        showMessageSponsor: false,
    },
    methods: {
        sendContact(){
            if(this.nombre != null && this.apellido != null && this.email != null && this.mensaje != null){

                try {
                    const data = JSON.stringify({
                      nombre: this.nombre,
                      apellido: this.apellido,
                      email: this.email,
                      mensaje: this.mensaje,
                      web: "2020"
                    });
                    const headers = {
                      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                    };
                    let datos = axios
                      .post(
                        "https://hooks.zapier.com/hooks/catch/6708777/odco8gz/",
                        data,
                        headers
                      )
                      .then(response => {
                        console.log(response);
                        this.showMessage = true;
                        this.message = "Su mensaje fue enviado";
                        this.nombre = null;
                        this.email = null;
                        this.apellido = null;
                        this.mensaje = null;
                      })
                      .catch(error => {
                        console.log(error);
                        this.showMessage = true;
                        this.message = error;
                      });
                  } catch (error) {
                    console.log(error);
                  }
            } else {
                this.showMessage = true;
                this.message = "Todos los campos del formulario son obligatoiros";
            }
            
        },
        sendSponsors(){
            if(this.nombreSponsor != null && this.telefonoSponsor != null && this.emailSponsor != null && this.empresaSponsor != null){

                try {
                    const data = JSON.stringify({
                      nombre: this.nombreSponsor,
                      email: this.empresaSponsor,
                      telefono: this.telefonoSponsor,
                      empresa: this.empresaSponsor
                    });
                    const headers = {
                      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                    };
                    let datos = axios
                      .post(
                        "https://hooks.zapier.com/hooks/catch/6708777/odprlgu/",
                        data,
                        headers
                      )
                      .then(response => {
                        console.log(response);
                        this.showMessageSponsor = true;
                        this.message = "Sus datos fueron enviados con exito";
                        this.nombreSponsor = null;
                        this.telefonoSponsor = null;
                        this.empresaSponsor = null;
                        this.emailSponsor = null;
                      })
                      .catch(error => {
                        console.log(error);
                        this.showMessageSponsor = true;
                        this.message = error;
                      });
                  } catch (error) {
                    console.log(error);
                  }
            } else {
                this.showMessageSponsor = true;
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