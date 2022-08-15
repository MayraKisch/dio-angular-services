import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../../services/list-service.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  characters: Array<any> = []
  constructor(private listService: ListServiceService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.listService.getList().subscribe(result => {
      this.characters = result?.results;
      console.log(this.characters);
    })
  }

}
