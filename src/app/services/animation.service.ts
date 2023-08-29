import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  public doOnIntersection(element:ElementRef, functionToDo:any){
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          console.log('Observado')
          functionToDo(element);
        }
      })
    })

    observer.observe(element.nativeElement);
  }
}
