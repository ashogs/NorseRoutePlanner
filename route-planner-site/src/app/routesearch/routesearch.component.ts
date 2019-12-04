import { Component, OnInit } from '@angular/core';
import { RoutesearchService } from "../routesearch.service"

@Component({
  selector: 'routesearch',
  templateUrl: './routesearch.component.html',

  styleUrls: ['./routesearch.component.scss']
})
export class RoutesearchComponent implements OnInit {
  private routeData: any;

  constructor(private svc: RoutesearchService) { }

  title = 'route-planner-site';
  fromValue = ""
  toValue = ""
  addToValue(from, to){
    this.fromValue = from
    this.toValue = to
    //console.log(from.value)
    //console.log(to.value)
    this.svc.getRoute(from.value,to.value).subscribe(data => {
      this.routeData = data;
    });
  }




  ngOnInit() {
    this.svc.getRoute("Mjømna","Nåra").subscribe(data => {
      this.routeData = data;
    });
  }

}
