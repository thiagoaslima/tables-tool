import { ResearchesListView } from './../views/ResearchesListView';
import { ResearchesList } from './../models/ResearchesList';
import { debounce } from '../helpers/debounce';

export class ResearchesListController {
    private _updateView: Function;

    constructor(
        private _model: ResearchesList,
        private _view: ResearchesListView
    ) {
        const input: HTMLInputElement = document.querySelector("[research-view-input]")
        input.oninput = debounce((evt) => { this.onInputChange(evt) }, 300)

        this._updateView = (model) => this._view.update(model);
        this._model.on(ResearchesList.EVENTS.ON_CHANGE, this._updateView);
    }

    onInputChange(evt: Event) {
        evt.stopPropagation();
        this._model.filterList(evt.target['value']);
    }
}
