import { SidraService } from "../services/SidraService";
import { SidraResearch } from "../types/SidraResearch";
import { Listenable } from "../shared/Listenable";
import { isNumber } from "../helpers/isNumber";

const EVENTS = {
    ON_CHANGE: 'onChange'
}
export class ResearchesList extends Listenable {
    private _list = {
        full: [] as SidraResearch[],
        filtered: [] as SidraResearch[],
        term: ''
    }

    public get list() {
        return this._list.filtered.slice(0);
    }

    protected _events = {
        [EVENTS.ON_CHANGE]: []
    }

    constructor(
        list: SidraResearch[]
    ) {
        super();
        this.registerList(list);
    }

    filterList(term: string) {
        debugger; 
        console.log(term);
        this._list.term = term;

        const filterFn = isNumber(term) 
            ? this._filterTablesById(parseInt(term, 10))
            : this._filterTablesByStr(term);
        
        this._list.filtered = this._list.full.reduce(filterFn, [] as SidraResearch[]);
        this.trigger(EVENTS.ON_CHANGE, this._list.filtered)
        
        return this._list.filtered;
    }

    public registerList(list: SidraResearch[]) {
        this._list.full = list;
        this.filterList(this._list.term);
    }

    private _filterTablesByStr(str: string) {
        return function (arr: SidraResearch[], research: SidraResearch) {
            const tables = research.filterTables(str);

            if (tables.length > 0) {
                arr.push(new SidraResearch({
                    id: research.id,
                    name: research.name,
                    tables: tables
                }));
            }

            return arr;
        }
    }

    private _filterTablesById(id: number) {
        return function (arr: SidraResearch[], research: SidraResearch) {
            const table = research.getTable(id);
            
            if (table) {
                arr.push(new SidraResearch({
                    id: research.id,
                    name: research.name,
                    tables: [table]
                }))
            }

            return arr;
        }
    }
}
