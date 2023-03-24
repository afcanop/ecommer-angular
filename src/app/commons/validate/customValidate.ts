import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static caracteresInvalidos(control: AbstractControl) {
    const numero = control.get('numero')?.value
    let valor = validarCarateres(numero)
    console.log({'expre': valor})

    if(valor){
      return {"numero": true}
    }
    return null
  }

}

function validarCarateres(valor: string ){
  const re = /^[a-z-A-Z-0-9]+$/;
  if (valor === '') return true;
  return re.test(valor);
}
