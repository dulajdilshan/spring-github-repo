import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TagsService {

  constructor(protected http: HttpClient) { }

  public _get(id: string) {
    return this.http.get<any[]>("http://localhost:8080/getstackusertags/".concat(id))
      .map(tags => tags);
  }

}