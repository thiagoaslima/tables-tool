import { SidraResearch } from "./index";
import { HTMLCustomElement } from "../helpers/HTMLCustomElement";

enum attributes {
  title = 'research-title'
}

enum events {
  domInitialized = 'sidra-research-dom-initialized'
}
export class SidraResearchElement extends HTMLCustomElement {

  static get observedAttributes() {
    return ['research-title'];
  }

  private _dom = {
    ready: false,
    _template: `
    <h3 research-title></h3>
    <ul reserach-list></ul>
    `,
    elements: {}
  } as Partial<{
    ready: boolean
    _template: string
    elements: {
      shadowRoot: ShadowRoot,
      researchTitle: Element
    }
  }>

  public researchTitle = '';

  constructor() {
    //@ts-ignore
    super();
    this._dom.elements.shadowRoot = this.attachShadow({ mode: 'open' });
    this.addEventListener(events.domInitialized, () => this._updateAttributes())
  }

  connectedCallback() {
    debugger;
    this._createDOMBase();
    this._dom.ready = true;
    this.dispatchEvent(new CustomEvent(events.domInitialized));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (name) {
        case attributes.title:
          this.researchTitle = newValue;
          this._updateResearchTitle(newValue);
      }
    }
  }

  /*** DOM MANIPULATION METHODS ***/

  private _createDOMBase() {
    let div = document.createElement('div');
    div.innerHTML = this._dom._template;

    let template: Element = div;

    if (this._hasInnerTemplate()) {
      template = this.querySelector('template') ;
    }

    this._convertTemplate(template);
  }

  private _convertTemplate(templateEl: Element | HTMLTemplateElement) {
    let researchTitle;

    if ((<HTMLTemplateElement>templateEl).content) {
      researchTitle = (<HTMLTemplateElement>templateEl).content.querySelector('[research-title]');
    } else {
      researchTitle = templateEl.querySelector('[research-title]');
    }
    
    researchTitle.className = researchTitle.className;
    this._dom.elements.researchTitle = researchTitle;
    this._dom.elements.shadowRoot.appendChild(this._dom.elements.researchTitle);
    templateEl.parentElement.removeChild(templateEl);
  }

  private _hasInnerTemplate() {
    return this.querySelector('template');
  }

  private _updateAttributes() {
    this._updateResearchTitle(this.researchTitle);
  }

  private _updateResearchTitle(newValue = '') {
    if (!this._dom.elements.researchTitle) {
      return;
    }
    if (this._dom.elements.researchTitle.textContent !== newValue) {
      this._dom.elements.researchTitle.textContent = newValue;
    }
  }

  /*
  private _internalResearch: SidraResearch;
  private _research: SidraResearch;
  private _filterText: string;
  private _tableId: number;
  private _researchId: number;
  private _showWithoutTables = false;
 
  private _dom = {} as {
    host: SidraResearchElement,
    researchTitle: HTMLHeadingElement,
    tablesList: HTMLUListElement,
    tables: { tableContainer: HTMLLIElement, tableId: HTMLParagraphElement, tableTitle: HTMLParagraphElement }[]
  };

  static get observedAttributes() {
    return Object.keys(attributes);
  }

  get research() {
    return this._research;
  }

  set research(research: SidraResearch) {
    this.updateDOM(this._internalResearch, research);

    this._internalResearch = research;
    this._research = research;

    // Reflect the value of the open property as an HTML attribute.
    if (research) {
      this.setAttribute('hasResearch', 'true');
    } else {
      this.removeAttribute('hasResearch');
    }

    if (this._tableId) {
      this.filterById(this._tableId);
    } else if (this._filterText) {
      this.filterByText(this._filterText);
    }
  }

  get filterText() {
    return this._filterText;
  }
  set filterText(str: string) {
    this._filterText = latinize.do(str).toLowerCase().trim();
    this.setAttribute('filterText', str);
  }

  public hasResearch() {
    return !!this._research;
  }

  constructor() {
    super(); 
    this._dom.host = this.previousSibling.nextSibling as SidraResearchElement;
    console.log('ctor1');
    this.createDOM();
    console.log('ctor2');
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue === newValue) return;

    switch (attr) {
      case attributes.item:
        this.research = JSON.parse(newValue);
    }
  }

  filterByText(str: string) {
    if (!str) {
      this._research = Object.assign({}, this._internalResearch);
    }

    const tables = this._internalResearch.filterTables(str);
    this._research = Object.assign({}, this._internalResearch, { tables });
  }

  filterById(id: number) {
    if (!id) {
      this._research = Object.assign({}, this._internalResearch);
    }

    const table = this._internalResearch.getTable(id);
    this._research = Object.assign({}, this._internalResearch, { tables: [table] });
  }

  createDOM() {
    const researchTitle = document.createElement('h3');
    researchTitle.className = 'sidra-research__research-title';

    const tablesList = document.createElement('ul');
    tablesList.className = 'sidra-research__tables-list-container';

    this._dom.host.appendChild(researchTitle);
    this._dom.host.appendChild(tablesList);

    this._dom.researchTitle = researchTitle;
    this._dom.tablesList = tablesList;
    this._dom.tables = [];
  }
  createTables() {
    this._dom.tables = this._research.tables.map(table => {
      const tableContainer = document.createElement('li');
      tableContainer.className = 'sidra-research__table-container';
      tableContainer.setAttribute('table-id', table.id.toString());

      const tableId = document.createElement('p');
      tableId.className = 'sidra-research__table-id';
      tableId.innerText = table.id.toString(10);

      const tableTitle = document.createElement('p');
      tableTitle.className = 'sidra-research__table-title';

      const title = document.createTextNode(table.name);
      tableTitle.appendChild(tableId);
      tableTitle.appendChild(title);

      tableContainer.appendChild(tableTitle);

      return {
        tableContainer,
        tableId,
        tableTitle
      };
    });

    this._dom.tables.forEach(tableDom => this._dom.tablesList.appendChild(tableDom.tableContainer));
  }

  updateDOM(oldValue: SidraResearch, newValue: SidraResearch) {
    if (!oldValue && newValue) {
      this._dom.researchTitle.innerText = newValue.name;
    }

    if (!newValue && oldValue) {
      this._dom.researchTitle.innerText = '';
    }

    if (newValue.name !== oldValue.name) {
      this._dom.researchTitle.innerText = newValue.name;
    }

    const oldTables = oldValue ? oldValue.tables : [];
    const newTables = newValue ? newValue.tables : [];

  }

  private manageTablesDOM(oldValue, newValue) {

  }
  */

}
customElements.define('sidra-research', SidraResearchElement);
