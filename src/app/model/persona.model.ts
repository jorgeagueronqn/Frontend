import { NonNullableFormBuilder } from "@angular/forms";

export class persona{

    //signo de interrogacion indica dato no necesario
    id?:number;
    nombre :string ;
    apellido:string;
    img:string;

    constructor(nombre:string,apellido:string,img:string){

        this.nombre=nombre;
        this.apellido=apellido;
        this.img=img;   
    }

}