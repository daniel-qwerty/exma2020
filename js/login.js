const app = new Vue({
  el: "#app",
  data: {
    titulo: "dasdas",
    users: null,
    NumDoc: null,
    Passw: null,
    Url: ""
  },
  methods: {
    login() {
      var data = this.users;
      var result = data.filter(d => d.CI === this.NumDoc);
      console.log(data[0].Nombres);

      if (result.length > 0 && this.Passw === "CXBYEXMA") {
        sessionStorage.setItem("login", "yes");
        this.Url =
          "quiz.html?name=" + result[0].Nombres + "&email=" + result[0].Correo;
        // window.location.href = this.Url;
        window.location.href = "home.html";
      } else {
        alert("Datos Incorrectos, intentelo nuevamente por favor");
      }
      console.log(result);
    }
  },
  mounted() {
    console.log("json");
    if (sessionStorage.getItem("login")) {
      //window.location.href = "quiz.html";
      window.location.href = "home.html";
    } else {
      axios.get("users.json").then(response => {
        this.users = response.data;
        console.log(this.users);
        console.log(this.users.galeriaFotos);
      });
    }
  }
});
