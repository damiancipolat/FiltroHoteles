export let datos = [1,23,4,5,6,6];

export class Randomizer{

	randomizar():any[]
	{
		//Array con alfabetos.
		let griego = ['alfa','beta','gamma','delta','épsilon','dzēta','ēta',
					'thēta','iota','kappa','lambda','my','ny','xi','ómicron',
					'pi','rho','sigma','tau','ýpsilon','phi','chi','psi','omega'];

		let arameo = ['Aleph','Beth','Gimel','Daleth','Heh','vav','Zayin','Heth','Teth','Yodh',
					  'Kaph','Lamedv','Mem','Nun','Samekh','Ayin','Pe','Sade','Qoph','Resh','Sin/Shin','Taw'];

		//Imagenes de hoteles.
		let imgs = ['h1.jpg','h2.jpg','h3.jpg','h4.jpg','h5.jpg','h6.jpg','h7.jpg','h8.jpg','h9.jpg','h10.jpg','h11.jpg',
					'h12.jpg','h13.jpg','h14.jpg','h15.jpg','h16.jpg','h17.jpg','h18.jpg','h19.jpg','h20.jpg'];

		//Tipo de hoteles.
		let tipos = ['negocios','turismo','romance','familiar','eventos'];

		let hoteles:any[] = [];
		let maximo  = 90;

		//Genero hoteles al azar.
		for (let i=0;i<=49;i++)
		{
			//Traigo un nombre al azar.
			let nombre1  = griego[Math.floor(Math.random()*griego.length)];
			let nombre2  = arameo[Math.floor(Math.random()*arameo.length)];

			//Traigo la imagen al azar.
			let imgHotel = imgs[Math.floor(Math.random()*imgs.length)];

			//Traigo el tipo de hotel.
			let tipoH 	 = tipos[Math.floor(Math.random()*tipos.length)];

			hoteles.push({
							idhotel:i,
							nombre :'Hotel '+nombre1+' '+nombre2,
							precio : Math.floor((Math.random()*300)+1)*100,
							img    : imgHotel,
							tipo   : tipoH
						});
		}

		return hoteles;		
	}

}