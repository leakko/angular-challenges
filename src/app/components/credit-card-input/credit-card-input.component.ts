import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent implements OnInit {
  @Input() public creditCardNumber = '';
  private readonly = false;
  public get isReadonly() {
    return this.readonly
  }
  @Input() public set isReadonly(value: boolean) {
    this.creditCardNumber = value ? 
    this.readonly = value;
  }

  private formatReadonlyCCNum(ccNum: string): string {
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
