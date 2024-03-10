export default {
  check,
  lookup,
};

var elements;

await loadPeriodicTable();

// ****************************

async function loadPeriodicTable() {
  elements = await (await fetch("periodic-table.json")).json();
}

function check(inputWord) {
  // Inicializa um array vazio para armazenar os símbolos encontrados
  let symbols = [];
  // Converte a palavra de entrada para minúsculas para facilitar a comparação
  let word = inputWord.toLowerCase();

  // Enquanto ainda houver uma palavra para verificar
  while (word.length > 0) {
    // Inicializa uma variável para armazenar o símbolo encontrado nesta iteração
    let foundSymbol = null;

    // Percorre todos os elementos da tabela periódica
    for (let i = 0; i < elements.length; i++) {
      // Converte o símbolo do elemento para minúsculas
      let symbol = elements[i].symbol.toLowerCase();

      // Se a palavra começa com este símbolo
      if (word.startsWith(symbol)) {
        // Armazena o símbolo encontrado
        foundSymbol = elements[i].symbol;
        console.log("Símbolo encontrado", foundSymbol);
        // Remove o símbolo da palavra
        word = word.slice(symbol.length);
        console.log("Letras restantes", word);
        // Sai do loop, pois já encontramos um símbolo nesta iteração
        break;
      }
    }

    // Se não encontramos um símbolo nesta iteração, sai do loop
    if (!foundSymbol) {
      break;
    }

    // Adiciona o símbolo encontrado ao array de símbolos
    symbols.push(foundSymbol);
  }

  // Retorna o array de símbolos
  return symbols;
}

function lookup(elementSymbol) {
  // Converte o símbolo de entrada para minúsculas para facilitar a comparação
  let symbol = elementSymbol.toLowerCase();

  // Percorre todos os elementos da tabela periódica
  for (let i = 0; i < elements.length; i++) {
    // Se o símbolo do elemento corresponder ao símbolo de entrada
    if (elements[i].symbol.toLowerCase() === symbol) {
      console.log("Elemento encontrado", elements[i]);
      // Retorna o elemento
      return elements[i];
    }
  }

  // Se nenhum elemento for encontrado, retorna um objeto vazio
  return {};
}
