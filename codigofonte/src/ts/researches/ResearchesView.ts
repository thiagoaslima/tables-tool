import { ResearchesList } from "./ResearchesList";
import { SidraResearch } from "../interfaces/SidraResearch";

export class ResearchesView {
    selector = 'research-selector';
    get template() {
        return `<input type="number" />`;
    }
 
    constructor(
        private _container: HTMLElement,
        private _researchList: ResearchesList
    ) { 
        this.update(this._researchList.list);
        this._researchList.on("list:updated", this.update.bind(this))
    }

    update(list: SidraResearch[]) {
        this._container.innerHTML = this._buildTemplate(list);
    }

    private _buildTemplate(list: SidraResearch[]) {
        return `
            <ul>
            ${
                list.map(obj => {
                    return `
                        <li data-type="research" data-id="${obj.id}">
                            <h2>${obj.nome}</h2>
                            <ul>
                                ${ obj.agregados.map(item => {
                                    return `
                                        <li data-type="table" data-id="${item.id}">
                                            ${item.nome}
                                        </li>
                                    `
                                }).join("")}
                            </ul>
                        </li>
                    `
                }).join("")
            }
            </ul>
        `
    }
}