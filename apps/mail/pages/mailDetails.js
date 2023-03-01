// import { carService } from "../services/car.service.js"

// export default {
//     template: `
//         <section class="email-details" v-if="email">
//             <h2>{{ email.title }}</h2>
//             <p>{{ email.content }}</p>
//             <img :src="'../assets/img/' + car.vendor + '.png'" alt="">
//             <nav>
//                 <hr />
//                 <RouterLink to="/car">Back to list</RouterLink>
//             </nav>

//             <hr / >
//             <pre>
//                 {{car}}
//             </pre>    
//         </section>
//     `,
//     data() {
//         return {
//             car: null
//         }
//     },
//     created() {
//         console.log('CarDetails Params:', this.$route.params)
//         this.loadCar()
//     },
//     computed: {
//         carId() {
//             return this.$route.params.carId
//         }
//     },
//     watch: {
//         carId() {
//             console.log('CarId Changed!')
//             this.loadCar()
//         }
//     },
//     methods: {
//         loadCar() {
//             carService.get(this.carId)
//                 .then(car => this.car = car)
//         }
//     }
// }