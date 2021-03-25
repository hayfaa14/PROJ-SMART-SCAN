
export class ModalComponent {
    constructor(href) {
        this.href = href
        this.displayModalComponent()
    }
    displayModalComponent() {
        const elems = document.querySelectorAll(".modal");
        const instances = M.Modal.init(elems);
        this.imagePreview();
    }
    imagePreview() {
        document.getElementById("cropBtn").onclick = () => {
            return false;
        }
    }
}