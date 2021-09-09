import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GymService } from 'src/app/services/gym/gym.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  gymname: string;

  searchResults = [];
  showList = true;
  showResults = [];
  results = false;
  noResults = false;

  constructor(private gym: GymService, private router: Router) { }

  ngOnInit() {
  }

  searchGym(){
    if(!this.gymname){
      this.showList = false;
      return;
    }
    this.showList = true;
    this.gym.searchGym(this.gymname)
      .subscribe(res =>{
        if(res.results.length > 0){
          this.results = true;
          this.noResults = false;
          this.showResults = res.results;
          this.searchResults = res.results;
        }else{
          this.results = false;
          this.noResults = true;
          this.showResults = res.results;
          this.searchResults = [{'gymname': 'No result found'}];
        }
      }, err =>{
        this.results = false;
        this.noResults = true;
        this.showResults = [];
        this.searchResults = [{'gymname': 'No result found'}];
      })
  }

  onCancel(event){
    this.showList = false;
    
  }

  onClear(event){
    this.showList = false;
    
  }

  gymProfile(gym){
    this.showList = false;
    this.gymname = '';
    this.router.navigate(['/profilegym'],{queryParams:{data: JSON.stringify(gym, null, 4)}});
  }

}
