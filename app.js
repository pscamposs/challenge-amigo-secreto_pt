//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const inputNome = document.getElementById("amigo");
const containerLista = document.querySelector(".name-list");
const containerResultado = document.querySelector(".result-list");

const nomes = [];

function adicionarAmigo() {
  const nome = inputNome.value.trim();
  if (nome === "") {
    alert("Você deve inserir um nome válido.");
    return;
  }
  nomes.push(nome);
  containerLista.innerHTML += `<li>${nome}</li>`;
}

function sortearAmigo() {
  if (nomes.length == 0) {
    alert("Você deve adicionar amigos para sortear.");
    return;
  }
  const random = Math.floor(Math.random() * nomes.length);
  const nomeSorteado = nomes[random];
  containerResultado.innerHTML = `<li>${nomeSorteado}</li>`;
}
