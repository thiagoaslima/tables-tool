import { sidraService } from "./services/SidraService";
import './sidraResearch/sidra-research.element';

// sidraService.getListPesquisas().then(pesquisas => {
  // const pesquisa = pesquisas[0];
  const el = document.querySelector('sidra-research');

  setTimeout(() => {
    el.setAttribute('research-title', 'Alterado!!!')
  }, 1000)
  // el.setAttribute('item', JSON.stringify(pesquisa));
// });
/*
class AppDrawer extends HTMLElement {

    // A getter/setter for an open property.
    get open() {
      return this.hasAttribute('open');
    }
  
    set open(val) {
      // Reflect the value of the open property as an HTML attribute.
      if (val) {
        this.setAttribute('open', '');
      } else {
        this.removeAttribute('open');
      }
      this.toggleDrawer();
    }
  
    // A getter/setter for a disabled property.
    get disabled() {
      return this.hasAttribute('disabled');
    }
  
    set disabled(val) {
      // Reflect the value of the disabled property as an HTML attribute.
      if (val) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }
    }
  
    // Can define constructor arguments if you wish.
    constructor() {
      // If you define a ctor, always call super() first!
      // This is specific to CE and required by the spec.
      super();
  
      // Setup a click listener on <app-drawer> itself.
      this.addEventListener('click', e => {
        // Don't toggle the drawer if it's disabled.
        if (this.disabled) {
          return;
        }
        this.toggleDrawer();
      });
    }
  
    toggleDrawer() {

    }
  }
  
  elementsDefine('app-drawer', AppDrawer);
  */