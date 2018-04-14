import { SidraService } from "../services/SidraService";
import { SidraResearch } from "./SidraResearch";
import { Listenable } from "../shared/Listenable";
import { isNumber } from "../helpers/isNumber";

export class ResearchesList extends Listenable {
    static EVENTS = {
        ON_CHANGE: 'onChange'
    }

    private _list = {
        full: [] as SidraResearch[],
        filtered: [] as SidraResearch[],
        term: ''
    }

    protected _events = {
        [ResearchesList.EVENTS.ON_CHANGE]: []
    }

    public get list() {
        return this._list.filtered.slice(0);
    }

    constructor(
        list: SidraResearch[]
    ) {
        super();
        this.registerList(list);
    }

    filterList(term: string) {
        this._list.term = term;

        if (term) {
            const filterFn = isNumber(term) 
                ? this._filterTablesById(parseInt(term, 10))
                : this._filterTablesByStr(term);
            
            this._list.filtered = this._list.full.reduce(filterFn, [] as SidraResearch[]);
        }  else {
            this._list.filtered = this.list;
        }

        this._emit(ResearchesList.EVENTS.ON_CHANGE);
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

    private _emit(eventName: string) {
        if (this._events[eventName]) {
            this.trigger(eventName, this)
        }
    }
}
