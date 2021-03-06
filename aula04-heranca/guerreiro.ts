import { Personagem } from "./personagem";
import { Util } from "./util";


export class Guerreiro extends Personagem {
    private _forca: number;
    private _agilidade: number;

    constructor(nome: string) {
        super(nome);
        this._forca = +Util.randomizar(100, 1_000).toFixed(1);
        this._agilidade = +Util.randomizar(100, 1_000).toFixed(1);
    }
    status(): string {
        return (
            "Personagem: ð¡ï¸ \n" +
            "\nNome: " +
            this._nome +
            ("\nEnergia:ð " + this._armadura.toFixed(1)) +
            ("\nAtaque: ð¡ï¸ " + this._vidaMaxima.toFixed(1)) +
            ("\nDefesa: ð¡ï¸ " + this._vidaAtual.toFixed(1)) +
            ("\nForÃ§a: ð¡ï¸ " + this._forca.toFixed(1)) +
            ("\nAgilidade: ð¡ï¸ " + this._agilidade.toFixed(1))
        );
    }
}