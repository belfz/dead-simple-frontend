import { Title } from './title.js';
import { fetchData } from './async-data.js';

async function init() {
    document.body.prepend(Title());

    const data = await fetchData();
    const el = document.createElement('pre');
    el.textContent = JSON.stringify(data, null, 2);
    document.body.append(el);
}

init();
