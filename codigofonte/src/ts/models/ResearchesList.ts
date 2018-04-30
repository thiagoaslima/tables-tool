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
            this._list.filtered = this._list.full.reduce(this._filterTables(term), [] as SidraResearch[]);
        } else {
            this._list.filtered = this._list.full;
        }

        this._emit(ResearchesList.EVENTS.ON_CHANGE);
        return this._list.filtered;
    }

    public registerList(list: SidraResearch[]) {
        this._list.full = list;
        this.filterList(this._list.term);
    }

    private _filterTables(term: string) {
        return function (arr: SidraResearch[], research: SidraResearch) {
            const tables = isNumber(term) ? [research.getTable(parseInt(term, 10))] : research.filterTables(term);

            if (tables.length > 0) {
                arr.push(this._sidraResearchFactory(research, tables));
            }

            return arr;
        }
    }

    private _sidraResearchFactory(baseResearch, tables) {
        return new SidraResearch(Object.assign({}, baseResearch, { tables }));
    }

    private _emit(eventName: string) {
        if (this._events[eventName]) {
            this.trigger(eventName, this)
        }
    }
}
