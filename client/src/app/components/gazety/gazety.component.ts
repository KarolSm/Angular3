import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/data-service'
import { Router } from '@angular/router';

@Component({
  selector: 'gazety',
  templateUrl: './gazety.component.html',
  styleUrls: ['./gazety.component.scss']
})
export class GazetyComponent implements OnInit {

  img_base_url: string
  magazines: Array<any>

  constructor(private service: DataService, private router: Router) {
    this.img_base_url = 'http://www.atarionline.pl/biblioteka/czasopisma/img/'
    this.magazines = []
  }

  log(x: any) {
    console.log(x)
    return x
  }

  emitMagazineSelection(magazine_name: string): void {
    // this.magazineSelected.emit(magazine_name)
    // zmiana routu tutaj
    this.router.navigate(['/', magazine_name]);
  }

  updateMagazines() {
    this.service.getMagazines().subscribe((resp) => {
      (this.magazines as any) = resp
    })
  }

  getImgUrl(img_name: string): string {
    return this.img_base_url + img_name
  }

  async ngOnInit(): Promise<void> {
    this.updateMagazines()
  }
}
