class Counter extends HTMLElement {

    btn;
    i = 0;

    constructor() {
        super();

        const template = document.createElement("template");
        template.innerHTML = `<style>
    :host button {
        padding: 4px 12px;
        background-color: rgb(152, 235, 245);
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        border: none;
    }
</style>
<button>Count : 0</button>`

        this.attachShadow({ mode: 'open' }).appendChild(
            template.content.cloneNode(true)
        );

        this.btn = this.shadowRoot.querySelector("button");

        this.btn.addEventListener("click", () => {
            this.i++;
            this.btn.innerHTML = "Count : " + this.i;
        })
    }

}

customElements.define("av-counter", Counter);