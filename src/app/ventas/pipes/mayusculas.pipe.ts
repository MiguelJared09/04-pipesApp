import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
  transform(value: string, enMayuscula: boolean=true): string {
    /* if(enMayuscula === false){
      return value.toUpperCase();
    }else{
      return value.toLowerCase();
    } */
    return (enMayuscula)
        ? value.toUpperCase()
        : value.toLowerCase();
  }
}
