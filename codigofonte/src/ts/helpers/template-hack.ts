import { isBrowser } from "./env-detection";

const TemplateHack = {
    _getId: (() => {
        let counter = 0;
        return () => `__template_id_${++counter}__`;
    })(),

    _tags: new Set(),
    
    registerCustomElement: (tagName: string) => TemplateHack._tags.add(tagName.toLowerCase()),
    
    processTemplates: () => {
        console.log('processing...');
        const templates = document.querySelectorAll('template');
        for (const template of templates) {
            let parentTag = template.parentElement.tagName.toLowerCase();
            if (this._tags.has(parentTag)) {
                const id = TemplateHack._getId();
                template.setAttribute('template_id', id);
                template.parentElement.setAttribute('template_reference', id);
            }
        }
    }

};

if (isBrowser) {
    document.addEventListener('DOMContentLoaded', () => {
        TemplateHack.processTemplates();
    });
}

export { TemplateHack };
