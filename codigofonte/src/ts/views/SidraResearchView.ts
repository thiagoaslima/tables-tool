import { SidraResearch } from './../models/SidraResearch';
import { View } from './View.interface';

export class SidraResearchView implements View {

    constructor(
        private _element: HTMLElement,
        private _tag: string
    ) { }

    private _template(model: SidraResearch) {
        return `
            <${this._tag} research-${model.id} data-id="${model.id}">${model.name}</${this._tag}>
            
            ${
            model.tables.length > 0
                ? `<ul research-${model.id} research-tables>
                    ${model.tables.map(table => `
                        <li research-table data-research=${model.id} data-id="${table.id}">${table.name}</li>
                    `).join('')}
                </ul>`
                : ''
            }
        `
    }

    public update(model) {
        this._element.innerHTML = this._template(model);
        return this._element;
    }
}