import { ResearchesList } from './../models/ResearchesList';
import { SidraResearchView } from './SidraResearchView';
import { View, ViewConstructor } from './View.interface';

export class ResearchesListView implements View {

    constructor(
        private _element: HTMLElement,
        private _subviewConstructor: ViewConstructor
    ) { }

    public update(model: ResearchesList) {
        this._element.innerHTML = this._template(model);
        return this._element;
    }

    private _template(model: ResearchesList) {
        return `
        <ul>
        ${
            model.list.map(research => {
                if (research.tables.length === 0) {
                    return ''
                }

                const view = this._createSubview(document.createElement('div'), 'li');
                return view.update(research).innerHTML;
            }).join('')
        }
        </ul>
        `
    }

    private _createSubview(element: HTMLElement, tag: string) {
        return new this._subviewConstructor(element, tag);
    }

}