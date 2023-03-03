import {utilService} from '../services/util.service.js'

export default {
    template: `
        <header class="body-header">
        <h1>Welcome to Appsus</h1>
        </header>

        <div class="app-body-layout"> 
        <div ref="gmail" class="img-container">
            <a @click="animateGmail"><img class="body-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-kYDByc1TdFsObi9J1qDTo6_WzPEF62sB7cOgopwPpw&s"></a>
        </div>
        <div ref="keep" class="img-container">
            <a @click="animateKeep"><img class="body-img" src="https://www.google.com/images/icons/product/keep-512.png"></a>
        </div>
        <div ref="books" class="img-container">
            <a @click="animateBooks"><img class="body-img" src="https://img.utdstc.com/icon/977/53c/97753c818561906c705eae21974189c9eb08472089817215bb68c75453fd9bd8:200"></a>
        </div>
        
        <footer class="body-footer">
            <p>&copy; Coffeerights to Islam & Itay </p>
        </footer>
    `,
    methods: {
        animateGmail() {
            utilService.animateCSS(this.$refs.gmail,'bounceIn')
        },
        animateKeep() {
            utilService.animateCSS(this.$refs.keep,'bounceIn')
        },
        animateBooks() {
            utilService.animateCSS(this.$refs.books,'bounceIn')
        }
    }

}