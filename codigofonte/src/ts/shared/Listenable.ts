export class Listenable {
    protected _events = {} as { [eventName: string]: { once: boolean, fn: Function }[] };

    on(eventName: string, fn: Function) {
        if (this._events[eventName]) {
            const obj = { once: false, fn: fn }
            this._events[eventName].push(obj);
        }
        return this;
    }

    once(eventName: string, fn: Function) {
        if (this._events[eventName]) {
            const obj = { once: true, fn: fn }
            this._events[eventName].push(obj);
        }
        return this;
    }

    off(eventName: string, fn: Function) {
        if (this._events[eventName]) {
            this._events[eventName] = this._events[eventName].filter(obj => obj.fn !== fn);
        }
        return this;
    }

    trigger(eventName: string, ...args: any[]) {
        if (this._events[eventName]) {
            this._events[eventName].forEach(obj => {
                if (obj.once) {
                    this.off(eventName, obj.fn);
                }
                obj.fn(...args);
            });
        }
        return this;
    }
}