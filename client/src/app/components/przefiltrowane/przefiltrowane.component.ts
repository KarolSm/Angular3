import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service'
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-przefiltrowane',
  templateUrl: './przefiltrowane.component.html',
  styleUrls: ['./przefiltrowane.component.scss']
})
export class PrzefiltrowaneComponent implements OnInit {

  years: Array<any>;
  data: Array<any>;
  selected_magazine: string
  selected_era: string
  constructor(private service: DataService, private route: ActivatedRoute, private router: Router) {
    this.years = []
    this.data = []
    this.selected_magazine = ''
    this.selected_era = ''
  }

  changeSelectedEra(era: string) {
    this.router.navigate(['/', this.selected_magazine], { queryParams: { rok: era } });
  }

  log(any: any): void {
    console.log(any)
  }

  updateYears() {
    this.service.getYears(this.selected_magazine).subscribe((resp) => {
      (this.years as any) = [...(resp as Array<any>), 'wszystkie']
    })
  }

  updateData(rok: string) {
    this.service.getData(this.selected_magazine, rok === 'wszystkie' ? '' : rok).subscribe((resp) => {
      (this.data as any) = resp
    })
  }

  async ngOnInit(): Promise<void> {

    this.route.paramMap.subscribe(params => {
      this.selected_magazine = params.get("magazyn") as string
      console.log(this.selected_magazine)
      this.updateYears()
      if (this.selected_era != '') {
        this.updateData(this.selected_era)
      }
    })
    this.route.queryParams.subscribe(queryParams => {
      this.selected_era = queryParams['rok'] ?? ''
      console.log(this.selected_era)
      if (this.selected_era != '') {
        this.updateData(this.selected_era)
      } else {
        this.data = []
      }
    });
  }

}
