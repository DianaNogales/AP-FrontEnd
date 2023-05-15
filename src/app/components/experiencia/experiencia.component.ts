import { Component, NgModule, OnInit } from '@angular/core';
import { ExperienciaBlockComponent } from 'src/app/experiencia-block/experiencia-block.component';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia', 
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  data = [
    {
      title: 'Educacion',
      list: [] as Experiencia[]
    },
    {
      title: 'Experiencia de Trabajo',
      list: [] as Experiencia[]
    }
  ]


  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService){}

  isLogged = false

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(){
    this.sExperiencia.lista().subscribe(data =>  {
      this.data[0].list = data.filter(i=> i.typE == 'ed')
      this.data[1].list = data.filter(i=> i.typE == 'ex')
    })
  }
  nuevo(mode: 'ex'|'ed'){
    this.sExperiencia.save(new Experiencia('Nombre', 'Description', 'Titulo', mode, 'xxxx-xxxx')).subscribe(()=>{
      location.reload() 
    })
  }

  onDelete(ex:Experiencia){
    if(ex.id) this.sExperiencia.delete(ex.id).subscribe(()=>{
      location.reload()
    })
  }
  onSave(ex:Experiencia){
    console.log(ex)
    if(ex.id) this.sExperiencia.update(ex.id, ex).subscribe(()=>{
      location.reload()
    })
  }
}


