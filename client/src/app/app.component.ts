import { Component, OnInit } from '@angular/core';
// import { DataService } from './services/data-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // magazines: Array<any>;
  // years: Array<any>;
  // data: Array<any>;
  // selected_magazine: string
  // selected_era: string

  constructor() {
    // this.magazines = []
    // this.years = []
    // this.data = []
    // this.selected_magazine = ''
    // this.selected_era = ''
  }

  // changeSelectedMagazine(magazine_name: string) {
  //   this.updateYears(magazine_name)
  //   this.data = []
  //   this.selected_era = ''
  //   this.selected_magazine = magazine_name
  // }

  // changeSelectedEra(era: string) {
  //   this.updateData(this.selected_magazine, era)
  //   this.selected_era = era
  // }

  // log(any: any): void {
  //   console.log(any)
  // }

  // updateMagazines() {
  //   this.service.getMagazines().subscribe((resp) => {
  //     (this.magazines as any) = resp
  //   })
  // }

  // updateYears(magazine: string) {
  //   this.service.getYears(magazine).subscribe((resp) => {
  //     (this.years as any) = [...(resp as Array<any>), 'wszystkie']
  //   })
  // }


  // updateData(magazine: string, rok: string) {
  //   this.service.getData(magazine, rok === 'wszystkie' ? '' : rok).subscribe((resp) => {
  //     (this.data as any) = resp
  //   })
  // }


  // async ngOnInit(): Promise<void> {
  //   // this.updateMagazines()
  // }
}


