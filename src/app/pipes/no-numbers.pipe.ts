import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noNumbers'
})
export class NoNumbersPipe implements PipeTransform {

  // args is for example: {{2 | riboh : 4}} so in this case: 2 is is value, and 4 its args, and 'riboh' is pipe name.
  transform(value: string, ...args: any[]): string {
    return value.replace(new RegExp("[0-9]", "g"), "")
  }

}
