export function debounce(fn: Function, timeout = 200) {
    let timerId: number;

    return (...args) => {
        if (timerId) clearInterval(timerId);
        timerId = setTimeout(() => fn(...args), timeout)
    }
}