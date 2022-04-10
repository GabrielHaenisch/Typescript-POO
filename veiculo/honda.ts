import { Veiculo } from './veiculos';

export class Honda extends Veiculo {

    private _potencia: string;
    private _cambio: string;

    constructor(modelo: string, tipo: string, marca: string, potencia: string, cambio: string) {
        super(modelo, tipo, marca);
        this._potencia = potencia;
        this._cambio = cambio;
    }

    status(): string {
        return (
            "Honda: \n" +
            "\nModelo: " +
            this._modelo +
            ("\nTipo:🔌 " + this._tipo) +
            ("\nMarca: 🗡️ " + this._marca) +
            ("\nPotencia:🔌 " + this._potencia) +
            ("\nCambio: 🗡️ " + this._cambio)

        );
    }

}
