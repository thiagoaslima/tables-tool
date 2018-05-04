export module ISidraResearch {

    export interface Instance {
        name: string;
        alias: string;
        tables: ISidraResearch.Table[];

        filterTables(str: string): ISidraResearch.Table[];
        getTable(id: number): ISidraResearch.Table;
    }

    export interface Table {
        id: number;
        name: string;
        alias: string;
    }
}

