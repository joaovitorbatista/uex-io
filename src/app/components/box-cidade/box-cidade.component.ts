import { Component, OnInit } from '@angular/core';
import { CidadeService } from './../../services/cidade.service';
import { Cidade } from './../../models/cidade';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-box-cidade',
  templateUrl: './box-cidade.component.html',
  styleUrls: ['./box-cidade.component.scss']
})
export class BoxCidadeComponent implements OnInit {

  cidade = {} as Cidade;
  cidades: Cidade[];

  constructor(private cidadeService: CidadeService) {}
  
  ngOnInit() {
    this.getCidades();
  }

  // Chama o serviço para obtém todos as Cidade
  getCidades() {
    this.cidadeService.getCidade().subscribe((cidades: Cidade[]) => {
      this.cidades = cidades;
    });
  }


}