import { SidraService } from "../services/SidraService";
import { SidraResearch } from "../interfaces/SidraResearch";
import { Listenable } from "../shared/Listenable";

export class ResearchesList extends Listenable {
    private _states = {
        initialized: false,
        list: [] as SidraResearch[]
    }

    private _EVENTS = {
        INIT: 'init',
        LIST: {
            UPDATED: "list:updated"
        }
    }

    protected _events = { 
        [this._EVENTS.INIT]: [], 
        [this._EVENTS.LIST.UPDATED]: [] 
    };

    public get list() {
        return this._states.list.slice(0);
    }

    constructor(
        private _sidraService: SidraService
    ) {
        super();
        this._sidraService.getListPesquisas()
            .then(list => {
                this._initialize()
                this.updateList(list)
            })
    }

    getResearch(researchId: string) {
        return this._states.list.find(obj => obj.id === researchId);
    }

    getTable(tableId: number|string) {
        const _id = tableId.toString();
        let res = null;
        for (let idx = 0, len = this._states.list.length; idx < len; idx++) {
            const obj = this._states.list[idx];
            res = obj.agregados.find(item => item.id === _id);
            if (res) {
                break;
            }
        }
        return res;
    }

    updateList(list: SidraResearch[]) {
        this._states.list = list;
        this.trigger(this._EVENTS.LIST.UPDATED, list)
    }

    private _initialize() {
        this._states.initialized = true;
        this.trigger(this._EVENTS.INIT);
    }
}
