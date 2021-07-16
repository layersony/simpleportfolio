import { Component, OnInit } from '@angular/core';
import { Messages } from '../messages'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactName!: string;
  contactEmail!: string;
  contactMessage!: string;

  newmessage:any;

  messages:Messages[]= [
    new Messages('Samuel Maingi', 'sammaingi5@gmail.com', 'hi how are you', new Date())
  ]

  savecontactmessage(){
    this.newmessage = new Messages(this.contactName, this.contactEmail, this.contactMessage, new Date())
    this.messages.push(this.newmessage)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
