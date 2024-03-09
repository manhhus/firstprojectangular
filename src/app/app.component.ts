import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './navbar/login/login.component';
import { AboutUsComponent } from './portfolio/about-us/about-us.component';
import { StudentComponent } from './portfolio/student/student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,LoginComponent,AboutUsComponent,StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-project';
}
