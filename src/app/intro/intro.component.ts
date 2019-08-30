import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  about ={};
  constructor(private config: ConfigService) { }

  ngOnInit() {
   this.about =  this.getAboutText();
  }

  getAboutText(){
    return this.config.getConfigData().about;
  }
}
