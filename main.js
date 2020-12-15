const app = new Vue({
    el:"#app",
    data() {
        return {
            title: "My vue 2.6 app",
            text: "Ceci est du texte",
            verif: true,
            display: 0
        }
    },
    methods: {
        animate() {
            this.display = !this.display;
        }
    }
});