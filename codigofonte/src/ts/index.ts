import { ResearchesList } from './researches/ResearchesList';
import { sidraService } from './services/SidraService';

const researchesList = sidraService.getListPesquisas().then(researches => new ResearchesList(researches))

researchesList.then(obj => {
    let filter = obj.filterList('teste')
    console.log(filter);
});
