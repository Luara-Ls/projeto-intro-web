//Escritoras Negras

// Semana I

const escritora1 = "Carolina Maria de Jesus".toUpperCase();
const anoDeNascimento1 = 1914;
const morouEmSaoPaulo1 = true;
const primeiroLançamento1 = ["Quarto de Despejo: Diário de uma Favelada (1960)"];
console.log(escritora1,  "Ano de Nascimento:", anoDeNascimento1, "Morou em São Paulo:", morouEmSaoPaulo1, "Primeiro Lançamento:", primeiroLançamento1);

const escritora2 = "Conceição Evaristo".toUpperCase();
const anoDeNascimento2 = 1946;
const morouEmSaoPaulo2 = false;
const primeiroLançamento2 = ["Ponciá Vicêncio - Becos da Memória (2006)"];
console.log(escritora2, "Ano de Nascimento:", anoDeNascimento2, "Morou em São Paulo:", morouEmSaoPaulo2, "Primeiro Lançamento:", primeiroLançamento2);

// Semana II

const escritora3 = "Ryane Leão".toUpperCase();
const anoDeNascimento3 = 1989;
const morouEmSaoPaulo3 = true;
const primeiroLançamento3 = ["Tudo Nela Brilha e Queima (2017)"];
console.log(escritora3, "Ano de Nascimento:", anoDeNascimento3, "Morou em São Paulo:", morouEmSaoPaulo3, "Primeiro Lançamento:", primeiroLançamento3);


const media = (anoDeNascimento1 + anoDeNascimento2 +anoDeNascimento3)/3;
console.log("Média:",  media);

const morouEmSaoPaulo = morouEmSaoPaulo1 && morouEmSaoPaulo2 && morouEmSaoPaulo3;
console.log("Verificação Booleana:", morouEmSaoPaulo);

// Semana III

// escritora1 = {
//     nome: "Carolina Maria de Jesus",
//     anoDeNascimento: 1914,
//     morouEmSaoPaulo1: true,

// },


//     escritora2 = {
//         nome2: "Conceição Evaristo",
//         anoDeNascimento: 1946,
//         morouEmSaoPaulo2: false,
//     },

//     escritora3 = {
//         nome: "Ryane Leão",
//         anoDeNascimento: 1989,
//         morouEmSaoPaulo3: false,
//     }

// //Semanas III e IV

// escritoraNegra1 = []

// if (escritora1.morouEmSaoPaulo1) {
//     escritoraNegra1.push(escritora1);
//     console.log(escritora1);

// }
// else {
//     alert("Item não adicionado")
// }

// // escritoraNegra1.push(escritora1);
// // console.log(escritoraNegra1);


// escritoraNegra2 = []

// if (escritora2.morouEmSaoPaulo2) {
//     escritoraNegra2.push(escritora2);
//     console.log(escritora2);

// }
// else {
//     alert("Item não adicionado")
// }

// // escritoraNegra2.push(escritora2);
// // console.log(escritoraNegra2);

// escritoraNegra3 = []
// if (escritora3.morouEmSaoPaulo3) {
//     escritoraNegra3.push(escritora3);
//     console.log(escritora3);

// }
// else {
//     alert("Item não adicionado")
// }


// escritoraNegra3.push(escritora3);
// console.log(escritoraNegra3);

//Semana V 

const escritoras = [{
  nome: "Carolina Maria de Jesus".toUpperCase(),
  anoDeNascimento: "1914",
  morouEmSaoPaulo: "true",
  primeiroLançamento: "Quarto de Despejo - Diário de uma Favelada (1960)",
  imagem: "imagens/carolina.png",
  link: "//www.portugues.com.br/literatura/carolina-maria-de-jesus.html",
  frase: "Eu cato papel, mas não gosto. Então eu penso: faz de conta que eu estou sonhando."


},

{
  nome: "Conceição Evaristo".toUpperCase(),
  anoDeNascimento: "1946",
  morouEmSaoPaulo: "false",
  primeiroLançamento: "Ponciá Vicêncio - Becos da Memória (2006)",
  imagem: "imagens/conceicao.png",
  link: "https://enciclopedia.itaucultural.org.br/pessoa6851/conceicao-evaristo",
  frase: "O meu texto é um lugar onde as mulheres se sentem em casa."


},

{

  nome: "Ryane Leão".toUpperCase(),
  anoDeNascimento: "1989",
  morouEmSaoPaulo: "true",
  primeiroLançamento: "Tudo Nela Brilha e Queima (2017)",
  imagem: "imagens/ryane.png",
  link: "//www.pensador.com/autor/ryane_leao/",
  frase: "Jamais peço desculpas por me derramar."

},

]

// console.log("Nome:", escritoras[0].nome);
// console.log("Ano de Nasscimento:", escritoras[0].anoDeNascimento);
// console.log("Morou em São Paulo:", escritoras[0].morouEmSaoPaulo);
// console.log("Primeiro Lançamento:", escritoras[0].primeiroLançamento);

// console.log("Nome:", escritoras[1].nome);
// console.log("Ano de Nasscimento:", escritoras[1].anoDeNascimento);
// console.log("Morou em São Paulo:", escritoras[1].morouEmSaoPaulo);
// console.log("Primeiro Lançamento:", escritoras[1].primeiroLançamento);

// console.log("Nome:", escritoras[2].nome);
// console.log("Ano de Nasscimento:", escritoras[2].anoDeNascimento);
// console.log("Morou em São Paulo:", escritoras[2].morouEmSaoPaulo);
// console.log("Primeiro Lançamento:", escritoras[2].primeiroLançamento);



//Semana VI

const arrayDeEscritoras = escritoras;

const escritorasNegras = arrayDeEscritoras.map((escitoras, index, array) => {
    return `A escritora ${escitoras.nome}, nasceu em ${escitoras.anoDeNascimento} e seu primeiro lançamento foi ${escitoras.primeiroLançamento}`
}
);
console.log(escritorasNegras);


function writer(array) {
  const itens = document.getElementById("listas")
  itens.innerHTML = ""
  for (let i = 0; i < array.length; i++) {
    itens.innerHTML += `
    <div class='flex'>
    
    <img src="${array[i].imagem}"alt="">
     
    <ul>
       <a href='${array[i].link}' target="_blank" >${array[i].nome}</a>    
        <li>Nasceu em: ${array[i].anoDeNascimento}</li>
        <li>Primeiro Lançamento: ${array[i].primeiroLançamento}</li>
        <li>Citação: "${array[i].frase}"</li>
       </ul>
        
    </div>
  `
  }
}
writer(escritoras)

function pesquisarEscritora() {
  const input = document.getElementById("campo")
  console.log(input.value)
  const escritoraEscolhida2 = escritoraEscolhida(input)
  writer(escritoraEscolhida2)
}
function escritoraEscolhida(input) {
  const escritoraEscolhida = escritoras.filter((item) => { return item.nome === input.value.toUpperCase() })
  console.log(`${escritoraEscolhida}` ? escritoraEscolhida : alert('Escritora não encontrada'))
  if (escritoraEscolhida.length >= 1) {
    return escritoraEscolhida
  } else {
    return escritoras
  }
}

