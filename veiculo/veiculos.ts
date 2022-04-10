export class Veiculo {

    protected _modelo: string;
    protected _tipo: string;
    protected _marca: string;


    constructor(modelo: string, tipo: string, marca: string){
        this._modelo = modelo;
        this._tipo = tipo;
        this._marca = marca;
    }

    status(): string {
        return (
            "Guerreiro: \n" +
            "\nModelo: " +
            this._modelo +
            ("\nEnergia:🔌 " + this._tipo),
            ("\nAtaque: 🗡️ " + this._marca)
        );
    }

}