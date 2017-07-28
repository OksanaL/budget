import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class DataPageService {

  // Observable string sources
  private addRowSource = new Subject<string>();

  // Observable string streams
  rowAdded$ = this.addRowSource.asObservable();

  // Service message commands
  addRow(data: any) {
    this.addRowSource.next(data);
  }

}