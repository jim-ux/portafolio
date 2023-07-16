import { AfterViewInit, Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  title = 'portafolio-web';
  distanceTop:number = 0;

  ngOnInit(){
    window.addEventListener('scroll', ()=>{
      this.distanceTop = window.scrollY;
      console.log(this.distanceTop);
    })

    
  }

  ngAfterViewInit(): void {
    
  }


  menuItems:any[]=[
    {
      link: '',
      class: 'uil-linkedin'
    },
    {
      link: '',
      class: 'uil-whatsapp-alt'
    }
  ];


  
}
