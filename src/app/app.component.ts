import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-list - Elain Polakova s00250500';

  moviesList = [
    {id: 1, title: 'The GodFather', year: '1972', director: 'Francis Ford Coppola' },
    {id: 2, title: 'Millers Crossing', year: '1990', director: 'The Coen Brothers' },
    {id: 3, title: 'Dial M for Murder', year: '1954', director: 'Alfred Hitchcock' },
    {id: 4, title: 'Whiplash', year: '2014', director: 'Damien Chanzelle ' }
  ];
}
