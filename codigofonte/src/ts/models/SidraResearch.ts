import { latinize } from "../helpers/latinize";

export class SidraResearch {
    static convert(params: {
        id: string,
        nome: string,
        agregados: Array<{ id: string, nome: string }>
    }) {
        return {
            id: params.id,
            name: params.nome,
            alteredName: SidraResearch.alterName(params.nome),
            tables: params.agregados.map(({ id, nome }) => ({ id: parseInt(id, 10), name: nome, alteredName: SidraResearch.alterName(nome) }))
        }
    }

    static alterName(name: string) {
        return latinize.do(name).toLowerCase();
    }

    public readonly id: string;
    public readonly name: string;
    public readonly alteredName: string;
    public readonly tables: Array<{ readonly id: number, readonly name: string, readonly alteredName: string }>

    constructor(params: { id: string, name: string, alteredName: string, tables: Array<{ id: number, name: string, alteredName: string }> }) {
        this.id = params.id;
        this.name = params.name;
        this.alteredName = params.alteredName;
        this.tables = params.tables;

        this.tables.forEach(Object.freeze);
        Object.freeze(this);
    }

    filterTables(term: string) {
        const _term = SidraResearch.alterName(term);
        return this.tables.filter(table => table.alteredName.includes(_term));
    }

    getTable(id: number) {
        return this.tables.find(table => table.id === id);
    }

}