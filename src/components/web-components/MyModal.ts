export class MyModal extends HTMLElement {
    private wrapper: HTMLDivElement;
    private closeBtn: HTMLButtonElement;

    constructor(){
        super();
        
        //attach shadow dom
        const shadow = this.attachShadow({mode: 'open'});

        //create wrapper
        this.wrapper = document.createElement('div');
        this.wrapper.className = 'modal';

        this.wrapper.innerHTML = `
              <style>
        .modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          justify-content: center;
          align-items: center;
        }
        .modal.show {
          display: flex;
        }
        .content {
          background: white;
          padding: 20px;
          border-radius: 8px;
        }
      </style>
      <div class="content">
        <slot></slot>
        <button id="closeBtn">Close</button>
      </div>
        `

        shadow.appendChild(this.wrapper);
        this.closeBtn = this.wrapper.querySelector('#closeBtn') as HTMLButtonElement;

        this.closeBtn.addEventListener('click', ()=>{this.hide()});
    }

    //Public method to show the modal
    public show(): void {
        this.wrapper.classList.add('show');
        this.dispatchEvent(new CustomEvent('modal-open', {bubbles: true, composed: true}));
    }

    public hide(): void {
        this.wrapper.classList.remove('show');
        this.dispatchEvent(new CustomEvent('modal-close', {bubbles: true, composed: true}));
    }
}

customElements.define('my-modal', MyModal);