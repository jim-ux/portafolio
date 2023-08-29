import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { AnimationService } from './services/animation.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portafolio-web';
  distanceTop: number = 0;
  effectExpBar:number = 0;

  @ViewChildren('titles') titles!: QueryList<ElementRef>;

  constructor(private animationServ: AnimationService) {}

  ngOnInit() {
    window.addEventListener('scroll', ()=>{
      this.distanceTop = window.scrollY;
      this.effectExpBar = this.distanceTop - 2300;
    })


    const typed = new Typed('#typed', {
      strings: ['Desarrollador Web', 'Diseñador Gráfico'],
      typeSpeed: 100,
      loop: true,
      showCursor: false
    });
  }

  ngAfterViewInit(): void {
    this.titles.forEach((title) => {
      this.animationServ.doOnIntersection(title, (element: ElementRef) => {
        element.nativeElement.classList.add('fade-up');
      });
    });
  }

  menuItems: any[] = [
    {
      link: '',
      class: 'uil-linkedin',
    },
    {
      link: '',
      class: 'uil-whatsapp-alt',
    },
  ];

  knowledge: any[] = [
    {
      name: 'HTML',
      iconSrc: 'assets/images/html-icon.png',
    },
    {
      name: 'CSS',
      iconSrc: 'assets/images/css-icon.png',
    },
    {
      name: 'JavaScript',
      iconSrc: 'assets/images/js-icon.png',
    },
    {
      name: 'Angular',
      iconSrc: 'assets/images/angular-icon.png',
    },
    {
      name: 'Node JS',
      iconSrc: 'assets/images/node-js-icon.png',
    },
    {
      name: 'MySql',
      iconSrc: 'assets/images/mysql-icon.png',
    },
    {
      name: 'Git',
      iconSrc: 'assets/images/git-icon.png',
    },
    {
      name: 'PHP',
      iconSrc: 'assets/images/php-icon.png',
    },
  ];

  experience:any[]=[
    {
      year: '2022 Jun - 2023 Ago',
      company: 'Leidy Inmobiliaria', 
      functions: 'Soporte Técnico, Creación de Dashboard con Power BI, Creación de página web, Creación de sistema de gestión de propiedades.'
    },
    {
      year: '2021 Oct - 2022 Ene',
      company: 'Ortopedia Vicet', 
      functions: 'Diseño y desarrollo de página web sobre los productos y servicios que ofrece la empresa'
    }
  ]
  //Funciones de animacion
}
