import { SidraResearchView } from './views/SidraResearchView';
import { sidraService } from './services/SidraService';
import { ResearchesList } from './models/ResearchesList';
import { ResearchesListView } from './views/ResearchesListView';
import { ResearchesListController } from './controllers/ResearchesListController';

const researchesList = sidraService.getListPesquisas().then(researches => new ResearchesList(researches))
const researchesListView = new ResearchesListView(document.querySelector("[research-view-respostas]"), SidraResearchView);
const researchesListController = researchesList.then(researchesList => new ResearchesListController(researchesList, researchesListView));
