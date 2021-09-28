import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CidadeService } from './../../services/cidade.service';
import { Cidade } from './../../models/cidade';

@Component({
  selector: 'app-box-cidade',
  templateUrl: './box-cidade.component.html',
  styleUrls: ['./box-cidade.component.scss']
})
export class BoxCidadeComponent{

  myControl = new FormControl();
  // options: string[] = ['Curitiba', 'Campo Largo', 'Pinhais'];

  cidade = {} as Cidade;
  cidades: Cidade[];

  constructor(private cidadeService: CidadeService) {}
  
  ngOnInit() {
    this.getCidades();
  }

  // Chama o serviço para obter todas as Cidade
  getCidades() {
    this.cidadeService.getCidade().subscribe((cidades: Cidade[]) => {
      this.cidades = cidades;
    });
  }




}