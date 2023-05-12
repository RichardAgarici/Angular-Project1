import {Component, OnInit} from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowingNewServer = false;
  serverCreationStatus = 'No Server was created.'
  serverName = 'TestServer'

  constructor() {
    setTimeout(() => {
      this.allowingNewServer = true
    }, 2000)
  }
  ngOnInit() {
  }
// aici odata ce am implementat OnInit, trebuie metoda ngOnInit(){} overrightuita.
  onCreateServer() {
    return this.serverCreationStatus = 'Server was created!'
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

