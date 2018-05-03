import { isBrowser } from "./env-detection";

const supportsCustomElementsV1 = 'customElements' in window;

// let originalFn = supportsCustomElementsV1 ? customElements.define.bind(window) : () => {};

if (supportsCustomElementsV1) {
    // customElements.define = function(...args) {
    //     console.warn("Don't use customElements.define directly. Instead, use elementsDefine");
    //     return originalFn(args);
    // }
}
const elementsDefine = (() => {
    let docReady = false;
    let elements = {} as { [tagName: string]: { tagName: string, constructor: Function, options: ElementDefinitionOptions } };

    const domHandler = () => {
        docReady = true;
        define(Object.keys(elements).map(key => elements[key]));
        elements = {};
    };
    return (tagName: string, constructor: Function, options?: ElementDefinitionOptions) => {
        if (!docReady) {
            document.addEventListener('DOMContentLoaded', domHandler);
            updateElements({ tagName, constructor, options }, elements);
        } else {
            customElements.define(tagName, constructor, options)
        }
    }
})();

function define(elements: Array<{ tagName: string, constructor: Function, options?: ElementDefinitionOptions }>) {
    for (let element of elements) {
        customElements.define(element.tagName, element.constructor, element.options || {} as ElementDefinitionOptions)
    }
}

function updateElements(element: { tagName: string, constructor: Function, options: ElementDefinitionOptions }, elements): void {
    if (elements[element.tagName] && element.options) {
        elements[element.tagName].options = Object.assign({}, elements[element.tagName].options || {}, element.options);
    } else {
        elements[element.tagName] = Object.assign({}, element);
    }
}

export { elementsDefine };
