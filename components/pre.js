export function Pre(data, root) {
    const el = document.createElement('pre');
    el.textContent = JSON.stringify(data, null, 2);
    return el;
}
