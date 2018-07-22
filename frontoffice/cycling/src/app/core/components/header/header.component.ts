import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
// @Output() sidebarToggle = new EventEmitter();


  // Todo add logic to add the class active page to the header when clicked on page.
  allListItems: any;
  constructor(
    private authenticationService: AuthenticationService ) {
   }

  ngOnInit() {
    this.authenticationService.getCurrentUserId();   // ToDo : used this later to add authorized user in the header
  }

  logOut() {
    this.authenticationService.logout();
  }


}
