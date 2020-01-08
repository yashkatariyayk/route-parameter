import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: 'city.component.html',
  styles: []
})
export class CityComponent implements OnInit {
  
  public selectedId;
  cities = [
    {id: 1, name: "Ahmedabad"},
    {id: 2, name: "Gandhinagar"},
    {id: 3, name: "Surat"},
    {id: 4, name: "Vadodara"},
    {id: 5, name: "Rajkot"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    
    } );
  }

  onSelect(city) {
    //this.router.navigate(['/citys', city.id]);
     this.router.navigate([city.id], { relativeTo: this.route });
  }

  isSelected(city) { return city.id === this.selectedId; }
}