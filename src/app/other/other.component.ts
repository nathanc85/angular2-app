import { Component } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent {
  stringInterpolation = "This is string interpolation";
  intInterpolation = 2;

  pressedClickButton(value: string) {
    alert(value);
  }
}
