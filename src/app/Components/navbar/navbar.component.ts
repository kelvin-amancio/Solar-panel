import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];
  constructor(){}

  ngOnInit() {
      this.items = [
          {
              label: 'Tela inicial',
              icon: 'fa-solid fa-house'
          },
          {
            label: 'Trabalhos',
            icon: 'fa-solid fa-envelope'
        },
        {
          label: 'Contato',
          icon: 'fa-solid fa-phone'
      }
      ];
  }

}
