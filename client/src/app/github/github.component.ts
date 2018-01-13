import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { GithubService } from '../gihubservice.service'
import {User} from "../models/user";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]
})
export class GithubComponent implements OnInit {

  protected username: string;
  protected githubUser: User;

  constructor(protected gitHubService: GithubService) {
    this.githubUser = new User();
  }

  ngOnInit() {
    this.gitHubService.call("dasunpubudumal").subscribe((user) => {
      this.githubUser = user;
    });
  }

  get() {
    this.gitHubService.call(this.username).subscribe((user) => {
      this.githubUser = user;
    });
  }


}
