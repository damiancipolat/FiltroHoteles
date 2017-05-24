import { Component,AfterViewInit,ElementRef,Inject, ChangeDetectorRef } 	from '@angular/core';
import { datos, Randomizer } from './datos';

declare var jQuery:any;

@Component({
  selector   : 'app',
  templateUrl: './app/views/home.html',
  providers  : [Randomizer]  
})
export class AppComponent implements AfterViewInit
{
	//Lote completo de hoteles.
	private hoteles : any[] = [];

	//Resultado del filtrado.
	private hotelesResu  : any[] = [];

	//Filtro de tipo de hotel.
	private filtroTipos = [
							{tipo:'negocios',flag:true},
							{tipo:'turismo',flag:true},
							{tipo:'romance',flag:true},
							{tipo:'familiar',flag:true},
							{tipo:'eventos',flag:true}							
						  ];

	//Para el slider.
    private elementRef  : ElementRef;	
   	slideValue    		: number = 0;

   	//Mayor precio.
   	private mayorPrecio : number;

	//Constructor de la clase.
	constructor(private random  : Randomizer,@Inject(ElementRef) elementRef: ElementRef, public cdr: ChangeDetectorRef)
	{
		//Para bindear con jquery.
      	this.elementRef = elementRef;

		this.hoteles 	 = this.random.randomizar();
		this.hotelesResu = this.hoteles;

		//Calculo el mayor precio.
		this.mayorPrecio = this.hoteles.reduce((prev, current) => (prev.precio > current.precio) ? prev : current).precio;

		//Por defecto seteo el mayor precio.
		this.slideValue  = this.mayorPrecio;
	}

	//Filtro todos los hoteles, en base a los filtros.
	filtrar()
	{
		let resu: any[] = [];

		this.hoteles.forEach((hotel)=>
		{
			//Reviso si cumple con el filtro de tipo hotel.
			if (this.filtroTipos.filter((elem)=>((elem.tipo==hotel.tipo)&&(elem.flag==true))).length>0)
			{
				//Si cumplio con el filtro de tipo de hotel, reviso si es menor al precio fijado.
				if (hotel.precio<=this.slideValue)
					resu.push(hotel);
			}
		});

		//Asigno el resultado a la variable de bindeo.
		this.hotelesResu=resu;
		console.log('filtrar');
	}

    ngAfterViewInit()
    {
      jQuery(this.elementRef.nativeElement).find("#slider").slider({
        range: false,
        orientation: "horizontal",
        min: 0,
        max: this.mayorPrecio,
        value: this.mayorPrecio,
        slide: ( event:any, ui:any ) => {
          this.slideValue = ui.value;
          this.filtrar();
        }
      });
    }	
}	


