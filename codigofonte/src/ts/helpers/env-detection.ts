const environment = (() => ({
    isBrowser: Object.prototype.toString.call(typeof window !== 'undefined' ? window : 0).toLowerCase() === '[object window]',
    isNode: Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0).toLowerCase() === '[object process]',
    isWebWorker: document === undefined && typeof postMessage === 'function',
    getEnvironment: () => {
        return this.isBrowser ? 'browser' : (
            this.isNode ? 'node' : (
                this.isWebWorker ? 'worker' : 'unknown'
            )
        );
    }
    
}))();

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
