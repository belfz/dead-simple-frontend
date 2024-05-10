import { Pre } from './pre.js';
import { fetchData } from './async-data.js';

function init() {
    const button = document.querySelector("#fetch-data");
    button.addEventListener("click", async () => {
        const data = await fetchData();
        const pre = Pre(data);
        document.body.append(pre);
    });
}

init();
