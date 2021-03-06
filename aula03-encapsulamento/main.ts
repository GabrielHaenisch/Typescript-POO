import { Personagem } from "./personagem";
import prompt from 'prompt-sync';

let person: Personagem = new Personagem('Goku', 10, 20, 30, 5);
let teclado = prompt();
let option: number = 0;

// Apresenta nosso objeto/personagem iniciando jogo com seus valores nos atributos
console.log(`Personagem: π§ ${person.nome}`);
console.log(`Energia: π ${person.energia}`);
console.log(`Ataque π‘οΈ: ${person.ataque}`);
console.log(`Defesa π‘οΈ: ${person.defesa}`);
console.log(`Vida: ποΈ ${person.vida}`);

while (option !== 9) {
    console.log(`==============Menu===============`);
    console.log('1. Treinar Ataque     π‘οΈ         ');
    console.log('2. Treinar Defesa     π‘οΈ         ');
    console.log('3. Descansar          π§         ');
    console.log('4. Entrar em Batalha  π«         ');
    console.log('9. Sair               π         ');
    console.log('=================================');

    option = +teclado('Ecolha uma aΓ§Γ£o π: ');

    switch (option) {
        case 1:
            person.treinarAtaque();
            console.log(person.status());
            break;
        case 2:
            person.treinarDefesa();
            console.log(person.status());
            break;
        case 3:
            let horas: number = +teclado('Digite o nΓΊmero de horas:β');
            person.descansar(horas);
            console.log(person.status());
            break;
        case 4:
            let rest: number = person.batalhar();
            console.log(`Esta batalha custou ${rest.toFixed()} de energia π`);
            console.log(person.status());
            break;
        default:
            break;
    }
}