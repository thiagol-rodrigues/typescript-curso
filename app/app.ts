import { Negociacao } from "./models/negociacao.js";
import { NegociacaoController } from "./controllers/negociacao-controller.js";


const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {controller.adicionar()});


