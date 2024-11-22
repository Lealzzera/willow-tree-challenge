//LISTA DE PALAVRAS FORNECIDA
const stringList = [
  "kitten",
  "banana",
  "kiwi",
  "aardvark",
  "apple",
  "kayak",
  "keyboard",
];

//DEFINO UM "Set()" E O POPULO COM A PRIMEIRA LETRA DE CADA PALAVRA UTILIZANDO UM "slice(0, 1)" PARA QUE NÃO TENHA CHAVES REPETIDAS
const letterSet = new Set();
stringList.forEach((str) => {
  letterSet.add(str.slice(0, 1));
});

/**
 * FAÇO A CRIAÇÃO DE UM NOVO OBJETO POIS
 * A MINHA INTENÇÃO NO FINAL É TER ALGO DESSA MANEIRA:
 * {a: ["aardvark", "apple"], b: ["banana"], k: ["kitten", "kayak", "keyboard"]}
 * */
const newObj = {};

//PERCORRO A LISTA DE STRINGS ATRAVÉS DE UM "for"
for (let i = 0; i < stringList.length; i++) {
  //ARMAZENO A KEY QUE DESEJO DECLARAR DENTRO DO OBJETO EM UMA CONST PARA DEIXAR O CÓDIGO MAIS LIMPO
  const objectKey = stringList[i].slice(0, 1);
  //NESSE "if" EU VERIFICO SE O OBJETO INSTANCIADO TEM A CHAVE QUE EU DESEJO ARMAZENAR, CASO SEJA "false" ELE EXECUTA O "if"
  if (!Object.hasOwn(newObj, objectKey)) {
    //AQUI DENTRO DO "if" EU CRIO A CHAVE NOVA E ARMAZENO UM ARRAY VAZIO QUE É ONDE IREI DEPOSITAR OS VALORES DE CADA CHAVE DO NOSSO OBJETO
    newObj[objectKey] = [];
  }
  //CASO O OBJETO JÁ TENHA A CHAVE CADASTRADA DENTRO DELE, ELE NÃO IRÁ ENTRAR NO "if" FAZENDO ENTÃO SOMENTE A
  //INCLUSÃO DO NOVO VALOR EM SUA RESPECTIVA CHAVE E REAPROVEITANDO O VALOR QUE JÁ CONTINHA E USO O "sort" PARA ORDENAR A LISTA EM ORDEM ALFABÉTICA
  newObj[objectKey] = [...newObj[objectKey], stringList[i]].sort();
}

/**APÓS A EXECUÇÃO DO "for" O NOSSO OBJETO FICARÁ DA SEGUINTE MANEIRA
{
  k: ["kitten", "kiwi", "kayak", "keyboard"];
  b: ["banana", "banana"];
  a: ["aardvark", "apple"];
}
*/

//PARTE DA RENDERIZAÇÃO DA LISTA

//PEGO O ELEMENTO "body" DO MEU DOCUMENT COM O "document.querySelector()"
const bodyDocument = document.querySelector("body");

//CRIO ENTÃO UMA "const" ONDE IREI CRIAR MINHA LISTA HTML, FAÇO UM "Object.keys()" PARA ITERAR SOMENTE PELAS CHAVES DO "newObj"
const ulList = Object.keys(newObj).map((item) => {
  /** AQUI DENTRO EU MONTO O MEU HTML COM O "item" QUE É A CHAVE, E PARA CADA CHAVE EU PERCORRO O
   * ARRAY QUE ARMAZENEI DENTRO DELAS, MONTANDO ENTÃO SUAS RESPECTIVAS "<li>"
   * USO TAMBÉM O MÉTODO "join()" PARA QUE NÃO FIQUEM SEPARADOS POR VÍRGULAS
   */
  const htmlList = `<h2>${item}</h2><ul>${newObj[item]
    .map((str) => `<li>${str}</li>`)
    .join("")}</ul>`;
  return htmlList;
});

/**AQUI NO FINAL DO NOSSO DESAFIO EU PEGO O MEU "bodyDocument" E UTILIZO UM "innerHTML"
 * PARA QUE ELE POSSA RENDERIZAR A NOSSA LISTA MONTADA PASSANDO TAMBÉM UM "join()" PARA QUE NÃO RENDERIZE COM VÍRGULAS*/
bodyDocument.innerHTML = ulList.join("");

//E CHEGAMOS AO FINAL DO DESAFIO. MUITO OBRIGADO AO PEDRO E O JP :D
