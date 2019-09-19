import {Component, HostListener, ViewChild} from '@angular/core';
import {MdbTableDirective} from "angular-bootstrap-md";
import { User } from '../user';
import { ServiceService } from '../service.service';

@Component({
  selector: 'search-for-pdf',
  templateUrl: './search-for-pdf.component.html',
  styleUrls: ['./search-for-pdf.component.scss']
})
export class SearchForPdfComponent {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  filterUser: User[] = [];
  allpdf: User[] = [];
  shoepdf: User[] = [];
  searchText: string = '';
  previous: string;

  constructor(private service:ServiceService) {
    
//  User u=new User(1,"1",20,"9/9/2019","https://votes22.bechirot.gov.il/nationalresults",false,"Ruth");
// User u1=new User(2,"1",20,"9/9/2019","https://votes22.bechirot.gov.il/nationalresults",false,"Ruth");
// User u2=new User(3,"2",20,"9/9/2019","https://votes22.bechirot.gov.il/nationalresults",false,"Avi");
  }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
    this.getUsers();
    this.mdbTable.setDataSource(this.filterUser);
    this.filterUser = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }
  getUsers(){
    this.service.getAllName().subscribe(res => {
      this.allpdf=res;  
      this.filterUser=this.allpdf;
    
       console.log(res);
     }, err => {
       console.log(err);
     })
    }
  searchItems() {
    this.filterUser=this.allpdf.filter(x=>x.name.startsWith(this.searchText));
  }
  onSelect(hero) {
    debugger;
    this.service.getpdfByname(hero).subscribe(res => {
      this.shoepdf=res;      
       console.log(res);
     }, err => {
       console.log(err);
     })
    }
}