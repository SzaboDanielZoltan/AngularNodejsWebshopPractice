import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminOrderFilter'
})
export class AdminOrderFilterPipe implements PipeTransform {

  transform(baseArray: any, phrase: string = '', counter: number): any {
    return baseArray.filter(item => {
      let jsonString = JSON.stringify(item)
        .replace(/"[^"]*"\:/g, '')
        .replace(/[",\{\}]/g, '');
      return jsonString.toLowerCase().indexOf(phrase.toLowerCase()) != -1;
    });
  }

}