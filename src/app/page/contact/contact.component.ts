import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailString="";
  name: string="";
  subject: string="";
  message: string="";
  


  constructor() { }

  ngOnInit() {
   
   
   
  }
  mailMe(){
    console.log(this.message)
   this.emailString = `mailto:angularnodejsketjobarat@gmail.com?subject=${this.subject}&body=
   Dear Madam/Sir,%0D%0A
   %0D%0A
   ${this.message}
   %0D%0A
   %0D%0ABest regard: ${this.name}`;
    window.location.href = this.emailString;
  }
 

}
