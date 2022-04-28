import {hotels} from "../hotels/hotels.js"
// console.log(navbar)
import '../style/hotels.css'

let hotels_div = document.getElementById("blank")
hotels_div.innerHTML = hotels()