import { ResearchesView } from './researches/ResearchesView';
import { ResearchesList } from './researches/ResearchesList';
import { sidraService } from './services/SidraService';

const researchesList = new ResearchesList(sidraService);
const view = new ResearchesView(document.querySelector('#research-view'), researchesList);
window['view'] = view