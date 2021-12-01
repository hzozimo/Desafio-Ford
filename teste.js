// Teste técnico Ford
const readline = require('readline');
let choice = "";

// imput do usuário perguntando se é criptografia ou descriptografia

const menu = "Digite 1 para criptografar e 2 para descriptografar \n";
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const escolha = () => leitor.question(menu, (answer) => {
  choice = answer;
});

// criptografar usando cífra de césar

const arrayBase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const arrayCripto = ["H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G"];

let vin = "";
let vinCripto = "";

const insertVin = () => leitor.question("Insira o VIN", (answer) => {
  vin = answer;
  console.log(`sua escolha   foi  ${choice}`);
});

const insertVinCripto = () => leitor.question("insira o VIN criptografado", (answer) => {
  vinCripto = answer;
});

// aplicar crifra de césar
const criptografarCesar = (VIN) => { 
  let cripto = "";
  for (let i = 0; i < VIN.length; i++) {
    let index = arrayBase.indexOf(VIN[i]);
    cripto += arrayCripto[index];
  }
  return cripto;
};

// converter string para hexadecimal
const hexadecimalizar = (cripto) => { 
  const hexa = cripto.toString(16);
  return hexa;
};

// converter hexadecimal para string
const decimalizar = (hexa) => { 
  const string = parseInt(hexa, 16).toString();
  return string;
}

// remover cifra de césar
const descriptografarCesar = (cripto) => {
  let descrip = "";
  for (let i = 0; i < cripto.length; i++) {
    let index = arrayCripto.indexOf(cripto[i]);
    descrip += arrayBase[index];
  }
  return descrip;
}


const main = () => {
  escolha();
  if (choice === 1) {
    insertVin();
    const vinCripto = criptografarCesar(vin);
    const vinHex = hexadecimalizar(vinCripto);
    console.log(`O VIN criptografado é ${vinHex}`);
  } else if (choice === 2) {
    insertVinCripto();
    const vinDescripto = decimalizar(vinCripto);
    const vinDescriptoCripto = descriptografarCesar(vinDescripto);
    console.log(`O VIN descriptografado é ${vinDescriptoCripto}`);
  };
}

main();


