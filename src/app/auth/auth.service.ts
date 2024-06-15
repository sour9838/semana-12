import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(usuario:string, password:string):void{
    sessionStorage.setItem("isLogget",'true');  }
    logout():void{
      sessionStorage.clear();
    }
    isLogget(): boolean{
      return !!sessionStorage.getItem("isLogget");
    }
}
