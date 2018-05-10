import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  public blogid: string = "";

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(
        params => {
          this.blogid = params['id'];
        }
    );
}

}
