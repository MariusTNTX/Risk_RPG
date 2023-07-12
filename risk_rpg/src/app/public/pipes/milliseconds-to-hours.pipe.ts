import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millisecondsToHours'
})
export class MillisecondsToHoursPipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor((value / (1000 * 60 * 60)));
    const minutes = Math.floor((value / (1000 * 60)) % 60);
    return (hours > 0) ? `${hours} horas` : `${minutes} minutos`;
  }
}