import { SidraResearchView } from './../views/SidraResearchView';
import { SidraResearch } from '../sidraResearch/SidraResearch';

export class SidraResearchController {
    private _updateView: Function

    constructor(
        private _model: SidraResearch,
        private _view: SidraResearchView
    ) {
        this._updateView = (model) => this._view.update(model);
    }
}