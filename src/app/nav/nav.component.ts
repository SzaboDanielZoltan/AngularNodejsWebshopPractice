import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
      if (window.pageYOffset > 0){
      let element=document.querySelector('.navbar')
      element.classList.add('opacity')
        
    }else{
      let element=document.querySelector('.navbar')
      element.classList.remove('opacity')
    }}
    
    
}
