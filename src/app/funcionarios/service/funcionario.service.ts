import { Injectable } from '@angular/core';

@Injectable()
export class FuncionarioService {

  private funcionarios: any [] = [
    {id: 1, nome: 'Rodrigo', loja: 'Centro', telefone: '(43) 8896-5696', turno: 'Noturno'},
    {id: 5, nome: 'Luiz', loja: 'UEL', telefone: '(43) 8933-4412', turno: 'Comercial'},
    {id: 9, nome: 'Matheus', loja: 'PUC', telefone: '(43) 9963-6398', turno: 'Comercial'},
    {id: 10, nome: 'Guilherme', loja: 'Centro', telefone: '(43) 8563-4196', turno: 'Matutino'}
  ];

  constructor() { }

  getAll(){
    return this.funcionarios;
  }

  getFuncionario(id: number){
    for (let i = 0; i < this.funcionarios.length; i++) {
      let funcionario = this.funcionarios[i];
      if(funcionario.id == id){
        return funcionario;
      }
    }
    return null;
  }

  setFuncionario(){
    
  }

}
