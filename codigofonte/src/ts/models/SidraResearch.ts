export class SidraResearch {
    static convert(params: {
        id: string,
        nome: string,
        agregados: Array<{ id: string, nome: string }>
    }) {
        return {
            id: params.id,
            name: params.nome,
            tables: params.agregados.map(({ id, nome }) => ({ id: parseInt(id, 10), name: nome }))
        }
    } 

    public readonly id: string;
    public readonly name: string;
    public readonly tables: Array<{ readonly id: number, readonly name: string }>


    constructor(params: {id: string, name: string, tables: Array<{ id: number, name: string }>}) {
        this.id = params.id;
        this.name = params.name;
        this.tables = params.tables;

        this.tables.forEach(Object.freeze);
        Object.freeze(this);
    }

    filterTables(str: string) {
        return this.tables.filter(table => table.name.includes(str));
    }

    getTable(id: number) {
        return this.tables.find(table => table.id === id);
    }

}