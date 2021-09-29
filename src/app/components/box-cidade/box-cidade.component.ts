import { Component } from "@angular/core";
// import {Component, Input, Directive, ViewContainerRef,  NgModule, TemplateRef } from '@angular/core'
import { FormControl } from "@angular/forms";
import { ClimaService } from "./../../services/clima.service";
import { Cidade } from "./../../models/cidade";
import { formatDate } from "@angular/common";
import * as moment from "moment";

@Component({
  selector: "app-box-cidade",
  templateUrl: "./box-cidade.component.html",
  styleUrls: ["./box-cidade.component.scss"],
})
export class BoxCidadeComponent {
  myControl = new FormControl();
  // options: string[] = ['Curitiba];

  cidades: Object;
  periodos: string[];

  constructor(private ClimaService: ClimaService) {}

  ngOnInit() {
    this.getCidades();
    // console.log(this.getCidades + 'aqui')
  }

  // Chama o serviço para obter todas as Cidade
  getCidades() {
    this.ClimaService.getClima().subscribe((cidades) => {
      var date = moment().format("D/MM/yyyy");

      console.log(`this.cidades`);
      console.log(typeof cidades);
      console.log(date);
      console.log(cidades["5300108"][date]);
      console.log(Object.keys(cidades["5300108"][date]));
      

      this.cidades = cidades["5300108"][date];
      this.periodos = Object.keys(cidades["5300108"][date]);

      /*var cidades = cidades
      cidades = cidades[Object.keys(cidades)[0]]*/
      //cidades = cidades[Object.keys(cidades)[0]]
      /*this.cidades = cidades;
      console.log(cidades.keys);*/
    });
  }

  // function(){
  //   var t=this;
  //   this.ClimaService.getClima().subscribe(
  //     function(e){
  //       t.cidades=e
  //     })
  // }
}
