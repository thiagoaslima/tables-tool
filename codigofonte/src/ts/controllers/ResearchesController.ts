class ResearchesController {
    public input: HTMLInputElement;
    public respostasContainer: HTMLElement;

    constructor() {
        const $ = document.querySelector;

        this.input = $('[research-view-input]');
        this.respostasContainer = $('[research-view-respostas]') 
    }
}