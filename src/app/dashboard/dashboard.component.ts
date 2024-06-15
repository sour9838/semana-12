import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule, MatIconModule,MatToolbarModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router:   Router,
     private route : ActivatedRoute,
     private authService:AuthService){

  }
irHome(){
  this.router.navigate(["home"],{relativeTo:this.route})

}
irPost(){
  this.router.navigate(["post"],{relativeTo:this.route})
}
irCurso(){
  this.router.navigate(["curso"],{relativeTo:this.route})
}
irEstado(){
  this.router.navigate(["estado"],{relativeTo:this.route})
}
logout(){
  this.authService.logout();
  this.router.navigate(["login"])
}
}
