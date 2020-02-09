const app = new Vue({
    el: "#app",
    data: {
        data: Object
    },
    methods: {},
    mounted() {
        if (!sessionStorage.getItem("login")) {
            window.location.href = "/memorias-cx-2019/";
        }
        sessionStorage.setItem("encuesta", "yes");
        axios.get("/data.json").then(response => {
            this.data = response.data;
        });
    }
});