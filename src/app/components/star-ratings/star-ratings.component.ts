import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent implements OnInit {

  @Input() public rating = 5;

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);

    return Array(totalFullStars).fill(0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
