import { RequestService, requestService } from './RequestService';
import { SidraResearch } from '../interfaces/SidraResearch';

export class SidraService {
    private _baseUrl = "https://servicodados.ibge.gov.br/api/v3/agregados";
 
    constructor(
        private _requestService: RequestService
    ) { }

    getListPesquisas(): Promise<SidraResearch[]> {
        return this._requestService.getJSON(this._baseUrl)
            .catch(err => {
                err.message = "Não foi possível acessar a lista de pesquisas do Sidra.\nErro original:\n" + err.message;
                throw err;
            });
    }

}

export const sidraService = new SidraService(requestService);

