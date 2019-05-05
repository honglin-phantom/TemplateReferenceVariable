import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string;

  /* 通过 template reference variable 为其在元件中创建实例 */
  @ViewChild('name')
  private name: ElementRef; /* 通过 @ViewChild 为 DOM 元素创建实例 */

  submitClick() {
    this.userName = this.name.nativeElement.value;
  }
}
