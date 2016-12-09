import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click) = "onClicked()"> Click Me! </button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter();

  onClicked() {
    this.clicked.emit('This works too!');
  }
}
