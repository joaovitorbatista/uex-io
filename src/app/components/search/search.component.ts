import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { CidadeService } from './../../services/cidade.service';
import { Cidade } from './../../models/cidade';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent {

   myControl = new UntypedFormControl();
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