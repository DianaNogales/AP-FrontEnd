import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Experiencia } from '../model/experiencia';

@Component({
  selector: 'app-experiencia-block',
  templateUrl: './experiencia-block.component.html',
  styleUrls: ['./experiencia-block.component.css']
})
export class ExperienciaBlockComponent {
  
  @Input() experiencia:Experiencia = new Experiencia('','','', 'ed','x');
  @Input() domClass:string = '';
  @Input() editMode:boolean = false;
  @Input() isLogged:boolean = false;
  @Output() onDelete = new EventEmitter<Experiencia>();
  @Output() onSave = new EventEmitter<Experiencia>();

  onEdit(){
    this.editMode = !this.editMode;
  }
  onDeleteE(){
    this.onDelete.emit(this.experiencia)
  }
  onSaveE(){
    this.onSave.emit(this.experiencia)
  }
} 
