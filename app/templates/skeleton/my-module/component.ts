import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sr-<%=name%>',
  templateUrl: './<%=name%>.component.html',
  styleUrls: ['./<%=name%>.component.scss']
})
export class <%=_name%>Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
