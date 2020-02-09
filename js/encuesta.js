const app = new Vue({
    el: "#app",
    data: {
        name: "",
        email: ""
    },
    methods: {
        entrar() {
            sessionStorage.setItem("encuesta", "yes");
            window.location.href = "home.html";
        }
    },
    mounted() {
        let urlParams = new URLSearchParams(window.location.search);
        this.name = urlParams.get("name");
        this.email = urlParams.get("email");

        if (sessionStorage.getItem("encuesta")) {
            window.location.href = "home.html";
        }
    }
});