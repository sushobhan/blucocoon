import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { GraphService } from './graph.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'bluecocoon';
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType :any= 'line';
  public lineChartPlugins = [];

  constructor(
		 private GraphService: GraphService
    ) { }

  ngOnInit() {
    this.GraphService.getMonthData().then((res: any) => {
			console.log(res);
      this.lineChartLabels=res.map(function (month:any) {
        return month.name;
      });
		}).catch(err => {
		});

    forkJoin(
      this.GraphService.getTotalData(),
      this.GraphService.getFirstData(),
      this.GraphService.getSecondData()
    ).subscribe((data)=>{
      console.log(data);
      let Total_data:any=data[0];
      let tdata=Total_data.map(function (month:any) {
        return month.count;
      });

      let First_data:any=data[1];
      let fdata=First_data.map(function (month:any) {
        return month.count;
      });

      let Second_data:any=data[2];
      let sdata=Second_data.map(function (month:any) {
        return month.count;
      });

      this.lineChartData=[
        { data: tdata, label: 'Total Data' },
        { data: fdata, label: 'First Dose' },
        { data: sdata, label: 'Second Dose' },
      ];
    });
  }
}
