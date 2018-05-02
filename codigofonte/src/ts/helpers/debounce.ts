export function debounce(fn: Function, timeout = 200) {
    let timerId: NodeJS.Timer;

    return (...args) => {
        if (timerId) clearInterval(timerId);
        timerId = setTimeout(() => fn(...args), timeout)
    }
}