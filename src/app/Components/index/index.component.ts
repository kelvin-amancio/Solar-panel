import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Carrosel } from 'src/app/model/carrosel';
import { CarroselService } from 'src/app/services/carrosel.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  carrosel!: Carrosel[];
  items!: MenuItem[];
  responsiveOptions!: any[];

 constructor(private serv: CarroselService){
  this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ];
window.addEventListener('scroll',()=>{
  this.animeScroll();
})
 }

  ngOnInit(): void {
    this.GetImage()
}

animeScroll(){
  const target = document.querySelectorAll('[data-ctt]');
  const animt = 'animate';

  const windowtop = window.pageYOffset + ((window.innerHeight * 3) /4);
  target.forEach(function(element:any){
    if((windowtop) > element.offsetTop){
      element.classList.add(animt)
    }else{
      element.classList.remove(animt)
    }
    console.log(element.offsetTop)
  })
}

Menu(){
  var bar = document.getElementById('baropen') as HTMLElement;
  var barclose = document.getElementById('barclose') as HTMLElement;
  var menu = document.querySelector('.nav-content') as HTMLElement;

  if(menu.classList.contains('open')){
    menu.classList.remove('open');
    barclose.style.display = "none";
    bar.style.display = "block";
  }else {
    menu.classList.add('open');
    bar.style.display = "none";
    barclose.style.display = "block";
 }

 menu.addEventListener("click",() => {
    menu.classList.remove('open');
    bar.style.display = "block";
    barclose.style.display = "none";
 })

}

GetImage(){
  this.carrosel =[
  {
    "id":1,
    "image":"assets/Imagens/1.jpeg"
  },
  {
    "id":2,
    "image":"assets/Imagens/2.jpeg"
  },
  {
    "id":3,
    "image":"assets/Imagens/3.jpeg"
  },
  {
    "id":4,
    "image":"assets/Imagens/4.jpeg"
  },
  {
    "id":5,
    "image":"assets/Imagens/5.jpeg"
  },
  {
    "id":6,
    "image":"assets/Imagens/6.jpeg"
  },
  {
    "id":7,
    "image":"assets/Imagens/7.jpeg"
  }
  ]
}

}
