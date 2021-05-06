import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { PaymentService} from '../shared/payment.service';
import { UserDTO } from '../shared/userDTO';


@Component({
  selector: 'app-ListUser',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'budget',
    'phone',
  ];
  displayCurrency: boolean;
  elements : UserDTO[];
  dataSource = new MatTableDataSource<UserDTO>();
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private store: Store<any>, private paymentService : PaymentService ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getusers();

    this.store.select('users').subscribe(
      users => {
        if (users) {
          this.displayCurrency = users.showCurrency;
        }
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  Checked(){
    this.store.dispatch(
      { type: '[NewRecordUser] Toggle currency' }
    );
  }

  getusers() {  
     this.paymentService.getUsersapi()
    .subscribe(res=>{ 
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.elements = res;
    })
   }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
    if (this.dataSource.paginator) {  
      this.dataSource.paginator.firstPage();  
    } 
  } 
}
