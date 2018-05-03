import { elementsDefine } from "../helpers/elements-define";
import { SidraResearch } from "./SidraResearch";
import { latinize } from "../helpers/latinize";

enum attributes {
  item = 'item',
  filterText = 'filterText',
  tableId = 'tableId'
}
export class SidraResearchElement extends HTMLElement {
  private _internalResearch: SidraResearch;
  private _research: SidraResearch;
  private _filterText: string;
  private _tableId: number;
  private _researchId: number;
  private _showWithoutTables = false;

  private _dom: {
    researchTitle: HTMLHeadingElement,
    tablesList: HTMLUListElement,
    tables: { tableContainer: HTMLLIElement, tableId: HTMLSpanElement, tableTitle: HTMLHeadingElement }[]
  };

  static get observedAttributes() {
    return Object.keys(attributes);
  }

  get research() {
    return this._research;
  }

  set research(research: SidraResearch) {
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

  // Can define constructor arguments if you wish.
  constructor() {
    // If you define a ctor, always call super() first!
    // This is specific to CE and required by the spec.
    super();
    debugger;
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue === newValue) return;
    debugger;
    switch (attr) {
      case attributes.item:
        this.research = JSON.parse(newValue);
        this.createDOM();
        this.createTables();
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
    const researchTitle = document.createElement('h2');
    researchTitle.className = 'sidra-research__research-title';
    researchTitle.innerText = this.research.name;

    const tablesList = document.createElement('ul');
    tablesList.className = 'sidra-research__tables-list-container';

    const self = this.previousSibling.nextSibling;
    self.appendChild(researchTitle);
    self.appendChild(tablesList);

    this._dom = {
      researchTitle,
      tablesList,
      tables: []
    }
  }

  createTables() {
    this._dom.tables = this._research.tables.map(table => {
      const tableContainer = document.createElement('li');
      tableContainer.className = 'sidra-research__table-container';
      
      const tableId = document.createElement('span');
      tableId.className = 'sidra-research__table-id';
      tableId.innerText = table.id.toString(10);

      const tableTitle = document.createElement('h3');
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

}

