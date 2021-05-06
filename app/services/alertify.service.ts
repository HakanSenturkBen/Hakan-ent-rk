import { Injectable } from '@angular/core';
declare let alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message: string) {

    alertify.confirm("Soruyorum", "Ekleyim mi" + message,
      function () {
        alertify.success('Sepete eklendi:' + message);
      },
      function () {
        alertify.error('Olay şimdi değişti');
      });
    alertify.success(message);

  }
  info(message: string) {
    alertify
      .alert(message, function () {
        alertify.message('OK');
      });

  }
}
