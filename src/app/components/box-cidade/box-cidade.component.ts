import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClimaService } from './../../services/clima.service';
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

  constructor(private ClimaService: ClimaService) {}
  
  ngOnInit() {
    this.getCidades();
  }

  // Chama o serviço para obter todas as Cidade
  getCidades() {
    this.ClimaService.getClima().subscribe((cidades: Cidade[]) => {
      this.cidades = cidades;
    });
  }




}