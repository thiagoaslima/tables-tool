import { elementsDefine } from "../helpers/elements-define";
import { SidraResearch } from "./index";
import { TemplateHack } from "../helpers/template-hack";

enum attributes {
  item = 'item',
  filterText = 'filterText',
  tableId = 'tableId'
}
export class SidraResearchElement extends HTMLElement {

  private _dom = {} as {
    researchTitle: Element
  }
 
  constructor() {
    super();
    debugger;
    console.log('ctor2');
    this._createDOMBase();
    console.log('ctor2');
  } 

  /*** DOM MANIPULATION METHODS ***/

  private _createDOMBase() {
    if (this._hasInnerTemplate()) {
      return this._convertInnerTemplate();
    }

    const researchTitle = document.createElement('h3');
    researchTitle.setAttribute('research-title', '');
    researchTitle.className = 'sidra-research__research-title';
    this._dom.researchTitle = researchTitle;
    this.appendChild(this._dom.researchTitle);
  }
 
  private _convertInnerTemplate() {
    const templateEl = this.querySelector('[template]');
    debugger;
    const researchTitle = templateEl.querySelector('[research-title]') || document.createElement('h3');
    console.log('t', templateEl);
    researchTitle.className = researchTitle.className + ' sidra-research__research-title';
    this._dom.researchTitle = researchTitle;
    this.appendChild(this._dom.researchTitle);
    templateEl.parentElement.removeChild(templateEl);
  }

  private _hasInnerTemplate() {
    return this.querySelector('[template]');
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

debugger;
TemplateHack.registerCustomElement('sidra-research');
customElements.define('sidra-research', SidraResearchElement);
