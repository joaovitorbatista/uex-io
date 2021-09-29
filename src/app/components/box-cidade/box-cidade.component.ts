import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ClimaService } from "./../../services/clima.service";
import * as moment from "moment";

@Component({
  selector: "app-box-cidade",
  templateUrl: "./box-cidade.component.html",
  styleUrls: ["./box-cidade.component.scss"],
})
export class BoxCidadeComponent {
  myControl = new FormControl();

  cidades: Object;
  periodos: string[];

  constructor(private ClimaService: ClimaService) {}

  ngOnInit() {
    this.getCidades();
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

    });
  }

}
