import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Alumno } from '../../clases/alumno';

@Component({
  selector: '[app-fila-alumno]',
  templateUrl: './fila-alumno.component.html',
  styleUrls: ['./fila-alumno.component.css']
})
export class FilaAlumnoComponent implements OnInit {
  @Output() alumnoSeleccionado: EventEmitter<any>= new EventEmitter<any>();
  @Input() unAlumno: Alumno;
    constructor() { }

    ngOnInit() {
    }
    mostrarDetalles(parametroAlumno)
    {
      console.log(" fila");
      this.alumnoSeleccionado.emit(parametroAlumno);
    }
  }


