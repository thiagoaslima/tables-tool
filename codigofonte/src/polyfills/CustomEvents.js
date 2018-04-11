//@ts-check
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill

(function () {

    if (typeof window['CustomEvent'] === "function") return false;

    /**
     * @typedef { { bubbles?: boolean, cancelable?:boolean, detail: any } } fnParams 
     * @param { string } event - Event name
     * @param { fnParams } params - Event characteristcs
     * @returns { event }
     */
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window["Event"].prototype;

    window["CustomEvent"] = CustomEvent;
})();