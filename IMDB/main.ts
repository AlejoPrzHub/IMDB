import { Professional } from "./proyecto.js"
import {Movie} from "./proyecto.js"

let webDev = new Professional("jose",27,"men","70kg","186cm","black","green","white","no","venezuela",0,"web dev");
let astronomo = new Professional("juan",35,"men","80kg","180cm","grey","brown","black","no","colombia",1,"astronomo");
let actriz = new Professional("julieta",22,"women","60kg","174cm","brown","blue","white","no","españa",0,"actress");

webDev.printAll();
astronomo.printAll();
actriz.printAll();


let pelicula = new Movie("La Casa Embrujada",2022,"Spain","Horror");

pelicula.printAll();