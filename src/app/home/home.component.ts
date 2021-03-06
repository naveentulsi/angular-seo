import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {

    this.title.setTitle('Home Component');
    this.meta.updateTag({ name: 'description', content: 'Home Component Description' });

  }
}
