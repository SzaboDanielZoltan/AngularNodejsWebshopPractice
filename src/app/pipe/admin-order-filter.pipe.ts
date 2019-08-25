import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminOrderFilter'
})
export class AdminOrderFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
