import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(usd: number, ...args: number[]): unknown {
    const [price]=args
    return usd*price;
  }

  
  
}
