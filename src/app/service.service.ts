import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
//  url:string="http://localhost:64502/api/user/";
  constructor(private http:HttpClient) {}
    getUserById(id:number){
      return this.http.get(environment.server+id).subscribe();
    }

    getpdfByname(id){
      return this.http.get<User[]>(environment.server+'getpdfByname/'+id);
    }
    getAllName(){
      return this.http.get<User[]>(environment.server+'getAllName');
    }
    getAllNotChecked(){
      return this.http.get<User[]>(environment.server+'getAllNotChecked');
    }
    updateCheckedUser(id)
    {
      debugger;
      return this.http.get<boolean>(environment.server+"updateCheckedUser/"+id);
    }
}
