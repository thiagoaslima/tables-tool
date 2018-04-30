const environment = ((global) => ({
    isBrowser: Object.prototype.toString.call(typeof global !== 'undefined' ? global : 0).toLowerCase() === '[object window]',
    isNode: Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0).toLowerCase() === '[object process]',
    isWebWorker: global.document === undefined && typeof postMessage === 'function',
    getEnvironment: () => {
        return this.isBrowser ? 'browser' : (
            this.isNode ? 'node' : (
                this.isWebWorker ? 'worker' : 'unknown'
            )
        );
    }
}))(this);

const isBrowser = environment.isBrowser;
const isNode = environment.isNode;
const isWebWorker = environment.isWebWorker;
const getEnvironment = () => environment.getEnvironment();

export {
    isBrowser,
    isNode,
    isWebWorker,
    getEnvironment
};
