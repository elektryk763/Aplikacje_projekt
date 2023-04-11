var czyMoge = false; 
posNowY = 0; 
posNowX = 2; 

var teren = "";
var blokada = 0;
var blokadaa = 0;
var blokadaaa = 0;
var blokadaaaa = 0;
var przeciwnicy = 
{
	przeciwnik1 : "<img src = \"./postaci/postac1.png\" class = \"przeciwnicy\" onclick = \"las.przec1()\"/>",
	przeciwnik2 : "<img src = \"./postaci/postac2.png\" class = \"przeciwnicy\" onclick = \"las.przec2()\"/>",
	przeciwnik3 : "<img src = \"./postaci/postac3.png\" class = \"przeciwnicy\" onclick = \"las.przec3()\"/>",
	przeciwnik4 : "<img src = \"./postaci/postac4.png\" class = \"przeciwnicy\" onclick = \"las.przec4()\"/>",
	przeciwnik5 : "<img src = \"./postaci/postac5.png\" class = \"przeciwnicy\" onclick = \"las.przec5()\"/>",
	
	przeciwnik6 : "<img src = \"./postaci/postac6.png\" class = \"przeciwnicy\" onclick = \"gora.przec6()\"/>",
	przeciwnik7 : "<img src = \"./postaci/postac7.png\" class = \"przeciwnicy\" onclick = \"gora.przec7()\"/>",
	przeciwnik8 : "<img src = \"./postaci/postac8.png\" class = \"przeciwnicy\" onclick = \"gora.przec8()\"/>",
	przeciwnik9 : "<img src = \"./postaci/postac9.png\" class = \"przeciwnicy\" onclick = \"gora.przec9()\"/>",
	przeciwnik10 : "<img src = \"./postaci/postac10.png\" class = \"przeciwnicy\" onclick = \"gora.przec10()\"/>",
	
	przeciwnik11 : "<img src = \"./postaci/postac11.png\" class = \"przeciwnicy\" onclick = \"pustynia.przec11()\"/>",
	przeciwnik12 : "<img src = \"./postaci/postac12.png\" class = \"przeciwnicy\" onclick = \"pustynia.przec12()\"/>",
	przeciwnik13 : "<img src = \"./postaci/postac13.png\" class = \"przeciwnicy\" onclick = \"pustynia.przec13()\"/>",
	przeciwnik14 : "<img src = \"./postaci/postac14.png\" class = \"przeciwnicy\" onclick = \"pustynia.przec14()\"/>",
	przeciwnik15 : "<img src = \"./postaci/postac15.png\" class = \"przeciwnicy\" onclick = \"pustynia.przec15()\"/>",
	przeciwnik16 : "<img src = \"./postaci/postac16.png\" class = \"przeciwnicy\" onclick = \"pustynia.przec16()\"/>",
}	

var hp = 
{
	life : 10,
	health : function()
	{
		document.getElementById("health").innerHTML = this.life;
		console.log(this.life);
	},
}
var las = 
{	
	drzewo3 : "<img src = \"./zmiana/drzewa 4.png\" style = \"z-index:5;\"/>",
	drzewo2 : "<img src = \"./zmiana/drzewa 2.png\" style = \"z-index:5;\"/>",
	drzewo1 : "<img src = \"./zmiana/tree.png\" style = \"z-index:5;\"/>",
	liczba : 0,
	przec1_hp : 10,
	przec2_hp : 11,
	przec3_hp : 12,
	przec4_hp : 13,
	przec5_hp : 14,
	enemy : 0,

	atakDrzewa : function(id)
	{
		kasuj();
		if( czyMoge == true )//blokada przejścia dalej
		{	
			if(blokada == 0)
			{
				document.getElementById("Bold").style.backgroundImage = "url('./tła/las.png')";
				this.liczba += 1;
				blokada = blokada + 1;
				console.log(blokada);
			}
		} 
	},
	
	losuj_przec_las : function()
	{
		var liczba_las1 = Math.floor(Math.random() * 5) + 1;
		var liczba_las2 = Math.floor(Math.random() * 5) + 1;
		var liczba_las3 = Math.floor(Math.random() * 5) + 1;
		if(blokada == 1)
		{
			teren = "las";
			if(liczba_las1 == 1)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik1;
			}
			else if(liczba_las1 == 2)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik2;
			}
			else if(liczba_las1 == 3)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik3;
			}
			else if(liczba_las1 == 4)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik4;
			}
			else if(liczba_las1 == 5)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik5;
			}
			
			if(liczba_las2 == 1)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik1;
			}
			else if(liczba_las2 == 2)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik2;
			}
			else if(liczba_las2 == 3)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik3;
			}
			else if(liczba_las2 == 4)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik4;
			}
			else if(liczba_las2 == 5)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik5;
			}

			if(liczba_las3 == 1)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik1;
			}
			else if(liczba_las3 == 2)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik2;
			}
			else if(liczba_las3 == 3)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik3;
			}
			else if(liczba_las3 == 4)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik4;
			}
			else if(liczba_las3 == 5)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik5;
			}
			else if(liczba_las3 == 6)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik6;
			}
			blokada = blokada + 1;
			console.log(blokada);
		}
	},
		przec1 : function()
		{
			if(blokada == 2)
			{
				document.getElementById("hp_przec").innerHTML = this.przec1_hp;
				this.enemy = this.przec1_hp;
				blokada = blokada + 1;
				console.log(blokada);
				
			}
		},
		przec2 : function()
		{
			if(blokada == 2)
			{
				document.getElementById("hp_przec").innerHTML = this.przec2_hp;
				this.enemy = this.przec2_hp;
				blokada = blokada + 1;
				console.log(blokada);	
			}
		},
		przec3 : function()
		{
			if(blokada == 2)
			{
				document.getElementById("hp_przec").innerHTML = this.przec3_hp;
				this.enemy = this.przec3_hp;
				blokada = blokada + 1;
				console.log(blokada);
			}
		},
		przec4 : function()
		{
			if(blokada == 2)
			{	
				document.getElementById("hp_przec").innerHTML = this.przec4_hp;
				this.enemy = this.przec4_hp;
				blokada = blokada + 1;
				console.log(blokada);
				
			}
		},
		przec5 : function()
		{
			if(blokada == 2)
			{
				document.getElementById("hp_przec").innerHTML = this.przec5_hp;
				this.enemy = this.przec5_hp;
				blokada = blokada + 1;
				console.log(blokada);
				
			}
		},

			
}
var gora = 
{
	gora4 : "<img src = \"./zmiana/gora4.png\" style = \"z-index:5;\"/>",
	gora3 : "<img src = \"./zmiana/gora3.png\" style = \"z-index:5;\"/>",
	gora2 : "<img src = \"./zmiana/gora2.png\" style = \"z-index:5;\"/>",
	gora1 : "<img src = \"./zmiana/gora.png\" style = \"z-index:5;\"/>",
	liczba1 : 0,
	przec6_hp : 8,
	przec7_hp : 7,
	przec8_hp : 9,
	przec9_hp : 10,
	przec10_hp : 7,
	enemy1 : 0,
	atakGory : function()
	{
		kasuj();
		if( czyMoge == true )
		{
			if(blokada == 0)
			{
				document.getElementById("Bold").style.backgroundImage = "url('./tła/gory.jpg')";
				this.liczba1 += 1;
				blokada = blokada + 1;
				console.log(blokada);
			}	
		}
	},
	losuj_przec_gora : function()
	{
		var liczba_gora1 = Math.floor(Math.random() * 5) + 1;
		var liczba_gora2 = Math.floor(Math.random() * 5) + 1;
		var liczba_gora3 = Math.floor(Math.random() * 5) + 1;
		if(blokada == 1)
		{
			teren = "gora";
			if(liczba_gora1 == 1)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik6;
			}
			else if(liczba_gora1 == 2)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik7;
			}
			else if(liczba_gora1 == 3)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik8;
			}
			else if(liczba_gora1 == 4)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik9;
			}
			else if(liczba_gora1 == 5)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik10;
			}
			
			if(liczba_gora2 == 1)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik6;
			}
			else if(liczba_gora2 == 2)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik7;
			}
			else if(liczba_gora2 == 3)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik8;
			}
			else if(liczba_gora2 == 4)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik9;
			}
			else if(liczba_gora2 == 5)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik10;
			}

			if(liczba_gora3 == 1)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik6;
			}
			else if(liczba_gora3 == 2)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik7;
			}
			else if(liczba_gora3 == 3)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik8;
			}
			else if(liczba_gora3 == 4)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik9;
			}
			else if(liczba_gora3 == 5)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik10;
			}
			blokada = blokada + 1;
			console.log(blokada);
		}
	},

	przec6 : function()
	{
		if(blokada == 2)
		{
			document.getElementById("hp_przec").innerHTML = this.przec6_hp;
			this.enemy1 = this.przec6_hp;
			blokada = blokada + 1;
			console.log(blokada);
		}
	},
	przec7 : function()
	{
		if(blokada == 2)
		{
			document.getElementById("hp_przec").innerHTML = this.przec7_hp;
			this.enemy1 = this.przec7_hp;
			blokada = blokada + 1;
			console.log(blokada);
		}
	},
	przec8: function()
	{
		if(blokada == 2)
		{
			document.getElementById("hp_przec").innerHTML = this.przec8_hp;
			this.enemy1 = this.przec8_hp;
			blokada = blokada + 1;
			console.log(blokada);
		}
	},
	przec9 : function()
	{
		if(blokada == 2)
		{
			document.getElementById("hp_przec").innerHTML = this.przec9_hp;
			this.enemy1 = this.przec9_hp;
			blokada = blokada + 1;
			console.log(blokada);
		}
	},
	przec10 : function()
	{
		if(blokada == 2)
		{
			document.getElementById("hp_przec").innerHTML = this.przec10_hp;
			this.enemy1= this.przec10_hp;
			blokada = blokada + 1;
			console.log(blokada);
		}
	},
}
var pustynia = 
{
	pustynia3 : "<img src = \"./zmiana/kaktus.png\" style = \"z-index:5;\"/>",
	pustynia2 : "<img src = \"./zmiana/czaszka2.png\" style = \"z-index:5;\"/>",
	pustynia1 : "<img src = \"./zmiana/czaszka.png\" style = \"z-index:5;\"/>",
	liczba2 : 0,
	przec11_hp : 11,
	przec12_hp : 13,
	przec13_hp : 14,
	przec14_hp : 10,
	przec15_hp : 12,
	przec16_hp : 13,
	enemy2 : 0,
	atakPustynia : function()
	{
		kasuj();
		if( czyMoge == true )
		{
			if(blokada == 0)
			{
				document.getElementById("Bold").style.backgroundImage = "url('./tła/pustynia.png')";
				this.liczba2 += 1;
				blokada = blokada + 1;
				console.log(blokada);
			}
		}
	},
	losuj_przec_pustynia : function()
	{
		var liczba_pustynia1 = Math.floor(Math.random() * 6) + 1;
		var liczba_pustynia2 = Math.floor(Math.random() * 6) + 1;
		var liczba_pustynia3 = Math.floor(Math.random() * 6) + 1;
		if(blokada == 1)
		{
			teren = "pustynia";
			if(liczba_pustynia1 == 1)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik11;
			}
			else if(liczba_pustynia1 == 2)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik12;
			}
			else if(liczba_pustynia1 == 3)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik13;
			}
			else if(liczba_pustynia1 == 4)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik14;
			}
			else if(liczba_pustynia1 == 5)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik15;
			}
			else if(liczba_pustynia1 == 6)
			{
				document.getElementById("pierwszy_przec").innerHTML = przeciwnicy.przeciwnik16;
			}
			
			if(liczba_pustynia2 == 1)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik11;
			}
			else if(liczba_pustynia2 == 2)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik12;
			}
			else if(liczba_pustynia2 == 3)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik13;
			}
			else if(liczba_pustynia2 == 4)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik14;
			}
			else if(liczba_pustynia2 == 5)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik15;
			}
			else if(liczba_pustynia2 == 6)
			{
				document.getElementById("drugi_przec").innerHTML = przeciwnicy.przeciwnik16;
			}

			if(liczba_pustynia3 == 1)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik11;
			}
			else if(liczba_pustynia3 == 2)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik12;
			}
			else if(liczba_pustynia3 == 3)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik13;
			}
			else if(liczba_pustynia3 == 4)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik14;
			}
			else if(liczba_pustynia3 == 5)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik15;
			}
			else if(liczba_pustynia3 == 6)
			{
				document.getElementById("trzeci_przec").innerHTML = przeciwnicy.przeciwnik16;
			}
			blokada = blokada + 1;
			console.log(blokada);
		}
	},
	przec11 : function()
	{
		if(blokada == 2)
		{
			document.getElementById("hp_przec").innerHTML = this.przec11_hp;
			this.enemy2 = this.przec11_hp;
			blokada = blokada + 1;
			console.log(blokada);
		}
	},
	przec12 : function()
	{
		if(blokada == 2)
		{
			document.getElementById("hp_przec").innerHTML = this.przec12_hp;
			this.enemy2 = this.przec12_hp;
			blokada = blokada + 1;
			console.log(blokada);
		}
	},
	przec13: function()
	{
		if(blokada == 2)
		{
			document.getElementById("hp_przec").innerHTML = this.przec13_hp;
			this.enemy2 = this.przec13_hp;
			blokada = blokada + 1;
			console.log(blokada);
		}
	},
	przec14 : function()
	{
		if(blokada == 2)
		{
			document.getElementById("hp_przec").innerHTML = this.przec14_hp;
			this.enemy2 = this.przec14_hp;
			blokada = blokada + 1;
			console.log(blokada);
		}
	},
	przec15 : function()
	{
		if(blokada == 2)
		{
			document.getElementById("hp_przec").innerHTML = this.przec15_hp;
			this.enemy2 = this.przec15_hp;
			blokada = blokada + 1;
			console.log(blokada);
		}
	},
	przec16 : function()
	{
		if(blokada == 2)
		{
			document.getElementById("hp_przec").innerHTML = this.przec16_hp;
			this.enemy2 = this.przec16_hp;
			blokada = blokada + 1;
			console.log(blokada);
		}
	},
}

var witaj = 
{
	witaj : function()
	{
		if(blokada == 0)
		{
			document.getElementById("Bold").style.backgroundImage = "url('./tła/witaj.jpg')";
			console.log(blokada);
		}
	},
}

var kalababos = 
{
	zmiana80 : "<img src = \"./zmiana/kalababos.png\" style = \"z-index:5;\"/>",
	kalababos : function()
	{
		if( czyMoge == true )//blokada przejścia dalej
		{
			if(blokada == 0)
			{
				document.getElementById("Bold").style.backgroundImage = "url('./tła/kalababos.jpg')";
				blokada == 1;
				document.getElementById("blok11").innerHTML = this.zmiana80;
			}
		}
	},
	dodaj_życie : function()
	{
		if( czyMoge == true )//blokada przejścia dalej
		{
			if(blokada == 1)
			{
				hp.life = hp.life + 5;
				document.getElementById("health").innerHTML = hp.life;
				blokada == 0;
			}
		}
	},
}
//kalababos

//RHAT GLLAD
var RHAT_GLLAD = 
{
	zmiana81 : "<img src = \"./zmiana/RHAT GLLAD.png\" style = \"z-index:5;\"/>",
	RHAT_GLLAD : function()
	{
		if( czyMoge == true )//blokada przejścia dalej
		{
			if(blokadaaa == 0)
			{
				document.getElementById("Bold").style.backgroundImage = "url('./tła/RHAT_GLLAD.jpg')";
				document.getElementById("blok18").innerHTML = this.zmiana81;
			}
		}
	},
	dodaj_życie : function()
	{
		if( czyMoge == true )//blokada przejścia dalej
		{
			if(blokadaaa == 0)
			{
				hp.life = hp.life + 10;
				document.getElementById("health").innerHTML = hp.life;
				blokadaaa +=1;
			}
		}
	},
}
var zmiana =
{
		
		
		zmiana1 : function()
		{
			if(blokada == 1)document.getElementById("blok").innerHTML = las.drzewo1;
		},
		zmiana2 : function()
		{
			if(blokada == 1)document.getElementById("blok2").innerHTML = las.drzewo3;
		},
		zmiana8 : function()
		{
			if(blokada == 1)document.getElementById("blok8").innerHTML = las.drzewo1;
		},
		zmiana12 : function()
		{
			if(blokada == 1)document.getElementById("blok12").innerHTML = las.drzewo2;
		},
		zmiana17 : function()
		{
			if(blokada == 1)document.getElementById("blok17").innerHTML = las.drzewo3;
		},
		zmiana20 : function()
		{
			if(blokada == 1)document.getElementById("blok20").innerHTML = las.drzewo2;
		},
		zmiana24 : function()
		{
			if(blokada == 1)document.getElementById("blok24").innerHTML = las.drzewo2;
		},
		zmiana25 : function()
		{
			if(blokada == 1)document.getElementById("blok25").innerHTML = las.drzewo1;
		},
		
		
		zmiana3 : function()
		{
			if(blokada == 1)document.getElementById("blok3").innerHTML = gora.gora4;
		},
		zmiana6 : function()
		{
			if(blokada == 1)document.getElementById("blok6").innerHTML = gora.gora3;
		},
		zmiana13 : function()
		{
			if(blokada == 1)document.getElementById("blok13").innerHTML = gora.gora1;
		},
		zmiana14 : function()
		{
			if(blokada == 1)document.getElementById("blok14").innerHTML = gora.gora2;
		},
		zmiana16 : function()
		{
			if(blokada == 1)document.getElementById("blok16").innerHTML = gora.gora3;
		},
		zmiana19 : function()
		{
			if(blokada == 1)document.getElementById("blok19").innerHTML = gora.gora4;
		},
		zmiana21 : function()
		{
			if(blokada == 1)document.getElementById("blok21").innerHTML = gora.gora2;
		},
		zmiana22 : function()
		{
			if(blokada == 1)document.getElementById("blok22").innerHTML = gora.gora1;
		},
		
		
		
		zmiana4 : function()
		{
			if(blokada == 1)document.getElementById("blok4").innerHTML = pustynia.pustynia3;
		},
		zmiana5 : function()
		{
			if(blokada == 1)document.getElementById("blok5").innerHTML = pustynia.pustynia2;
		},
		zmiana7 : function()
		{
			if(blokada == 1)document.getElementById("blok7").innerHTML = pustynia.pustynia2;
		},
		zmiana9 : function()
		{
			if(blokada == 1)document.getElementById("blok9").innerHTML =  pustynia.pustynia3;
		},
		zmiana10 : function()
		{
			if(blokada == 1)document.getElementById("blok10").innerHTML = pustynia.pustynia2;
		},
		zmiana15 : function()
		{
			if(blokada == 1)document.getElementById("blok15").innerHTML = pustynia.pustynia3;
		},
		zmiana23 : function()
		{
			if(blokada == 1)document.getElementById("blok23").innerHTML = pustynia.pustynia3;
		},
		zmiana27 : function()
		{
			if(blokada == 1)document.getElementById("blok27").innerHTML = pustynia.pustynia1;
		},
}


var meta = 
{
	meta : function()
	{
		if( czyMoge == true )//blokada przejścia dalej
		{
			if(blokadaaaa == 0)
			{
				document.getElementById("Bold").style.backgroundImage = "url('./tła/meta.jpg')";
				blokadaaaa +=1;
			}
		}
	},
	gratulacje: function()
	{
		if( czyMoge == true )//blokada przejścia dalej
		{
			if(blokadaaaa == 1)
			{
				alert("Gratulujemy wygranej!!! Good job!!!");
				blokadaaaa +=1;
			}
		}
	},
}
//meta
function idz_dalej()
{
	document.getElementById("Bold").style.backgroundImage = "url('')";
	document.getElementById("pierwszy_przec").innerHTML = "";
	document.getElementById("drugi_przec").innerHTML = "";
	document.getElementById("trzeci_przec").innerHTML = "";
	blokada = blokada - 3;
	console.log(blokada);
}
function wyjdz()
{
	if(blokada == 3)
	{
		document.getElementById("Bold").style.backgroundImage = "url('')";
		document.getElementById("pierwszy_przec").innerHTML = "";
		document.getElementById("drugi_przec").innerHTML = "";
		document.getElementById("trzeci_przec").innerHTML = "";
		hp.life = hp.life - 5;
		document.getElementById("health").innerHTML = hp.life;
		blokada = blokada - 3;
		console.log(blokada);	
		if(hp.life <= 0)
		{
			hp.life == 0;
			document.getElementById("health").innerHTML = hp.life;
			alert("PRZEGRAŁEŚ");
			blokada == 100;
		}
	}
}
function walcz()
{
	if((pustynia.liczba2 > 0) || (gora.liczba1 > 0) || (las.liczba > 0))
	{
		var miecz = "<img src = \"./dodatki/miecz.png\" class = \"rzeczy\">";
		document.getElementById("miecz").innerHTML = miecz;
	}
}
function kasuj()
{
	var pustosc = "";
	document.getElementById("miecz").innerHTML = pustosc;
	document.getElementById("pierwszy").innerHTML = pustosc;
	document.getElementById("drugi").innerHTML = pustosc;
	document.getElementById("trzeci").innerHTML = pustosc;
	document.getElementById("suma").innerHTML = pustosc;
	document.getElementById("hp_przec").innerHTML = pustosc;
	document.getElementById("suma").style.backgroundColor = "white";
	document.getElementById("hp_przec").style.backgroundColor = "white";
}

function losuj()
{
	if(blokada == 3)
	{
		var raz = "<img src = \"./dodatki/raz.png\" class = \"rzeczy\">";
		var dwa = "<img src = \"./dodatki/dwa.png\" class = \"rzeczy\">";
		var trzy = "<img src = \"./dodatki/trzy.png\" class = \"rzeczy\">";
		var cztery = "<img src = \"./dodatki/cztery.png\" class = \"rzeczy\">";
		var piec = "<img src = \"./dodatki/piec.png\" class = \"rzeczy\">";
		var szesc = "<img src = \"./dodatki/szesc.png\" class = \"rzeczy\">";
		var liczba = Math.floor(Math.random() * 6) + 1;
		var liczba2 = Math.floor(Math.random() * 6) + 1;
		var liczba3 = Math.floor(Math.random() * 6) + 1;  
		if(liczba == 1)
		{
			document.getElementById("pierwszy").innerHTML = raz;
		}
		else if(liczba == 2)
		{
			document.getElementById("pierwszy").innerHTML = dwa;
		}
		else if(liczba == 3)
		{
			document.getElementById("pierwszy").innerHTML = trzy;
		}
		else if(liczba == 4)
		{
			document.getElementById("pierwszy").innerHTML = cztery;
		}
		else if(liczba == 5)
		{
			document.getElementById("pierwszy").innerHTML = piec;
		}
		else if(liczba == 6)
		{
			document.getElementById("pierwszy").innerHTML = szesc;
		}
		
		if(liczba2 == 1)
		{
			document.getElementById("drugi").innerHTML = raz;
		}
		else if(liczba2 == 2)
		{
			document.getElementById("drugi").innerHTML = dwa;
		}
		else if(liczba2 == 3)
		{
			document.getElementById("drugi").innerHTML = trzy;
		}
		else if(liczba2 == 4)
		{
			document.getElementById("drugi").innerHTML = cztery;
		}
		else if(liczba2 == 5)
		{
			document.getElementById("drugi").innerHTML = piec;
		}
		else if(liczba2 == 6)
		{
			document.getElementById("drugi").innerHTML = szesc;
		}

		if(liczba3 == 1)
		{
			document.getElementById("trzeci").innerHTML = raz;
		}
		else if(liczba3 == 2)
		{
			document.getElementById("trzeci").innerHTML = dwa;
		}
		else if(liczba3 == 3)
		{
			document.getElementById("trzeci").innerHTML = trzy;
		}
		else if(liczba3 == 4)
		{
			document.getElementById("trzeci").innerHTML = cztery;
		}
		else if(liczba3 == 5)
		{
			document.getElementById("trzeci").innerHTML = piec;
		}
		else if(liczba3 == 6)
		{
			document.getElementById("trzeci").innerHTML = szesc;
		}
		var suma = liczba + liczba2 + liczba3;
		document.getElementById("suma").innerHTML = suma;
		if(teren == "las")
		{
			if(suma > las.enemy)
			{
				document.getElementById("suma").style.backgroundColor = "green";
				document.getElementById("hp_przec").style.backgroundColor = "green";
				hp.life = hp.life + 1;
				document.getElementById("health").innerHTML = hp.life;
				idz_dalej();
			}
			else if((suma == las.enemy))
			{
				document.getElementById("suma").style.backgroundColor = "gray";
				document.getElementById("hp_przec").style.backgroundColor = "gray";
			}
			else
			{
				document.getElementById("suma").style.backgroundColor = "red";
				document.getElementById("hp_przec").style.backgroundColor = "red";
				hp.life = hp.life - 1;
				document.getElementById("health").innerHTML = hp.life;
				if(hp.life <= 0)
				{
					hp.life == 0;
					document.getElementById("health").innerHTML = hp.life;
					alert("PRZEGRAŁEŚ");
					blokada += 100;
				}
			}
		}
		else if(teren == "gora")
		{
			if(suma > gora.enemy1)
			{
				document.getElementById("suma").style.backgroundColor = "green";
				document.getElementById("hp_przec").style.backgroundColor = "green";
				hp.life = hp.life + 1;
				document.getElementById("health").innerHTML = hp.life;
				idz_dalej();
			}
			else if((suma == gora.enemy1))
			{
				document.getElementById("suma").style.backgroundColor = "gray";
				document.getElementById("hp_przec").style.backgroundColor = "gray";
			}
			else
			{
				document.getElementById("suma").style.backgroundColor = "red";
				document.getElementById("hp_przec").style.backgroundColor = "red";
				hp.life = hp.life - 1;
				document.getElementById("health").innerHTML = hp.life;
				if(hp.life <= 0)
				{
					hp.life == 0;
					document.getElementById("health").innerHTML = hp.life;
					alert("PRZEGRAŁEŚ");
					blokada == 100;
				}
			}
		}	
		else
		{
			if(suma > pustynia.enemy2)
			{
				document.getElementById("suma").style.backgroundColor = "green";
				document.getElementById("hp_przec").style.backgroundColor = "green";
				hp.life = hp.life + 1;
				document.getElementById("health").innerHTML = hp.life;
				idz_dalej();
			}
			else if((suma == pustynia.enemy2))
			{
				document.getElementById("suma").style.backgroundColor = "gray";
				document.getElementById("hp_przec").style.backgroundColor = "gray";
			}
			else
			{
				document.getElementById("suma").style.backgroundColor = "red";
				document.getElementById("hp_przec").style.backgroundColor = "red";
				hp.life = hp.life - 1;
				document.getElementById("health").innerHTML = hp.life;
				if(hp.life <= 0)
				{
					hp.life == 0;
					document.getElementById("health").innerHTML = hp.life;
					alert("PRZEGRAŁEŚ");
					blokada == 100;
				}
			}
		}
	}
}

function sprawdz(id)
{
    var hex = document.getElementById(id);
    var posY = hex.classList[1];
    var posX = hex.classList[2];
    posY = posY.substr(1);
    posX = posX.substr(1);
    parseFloat(posY);
    parseFloat(posX);
    var roznicaY = posNowY - posY;
    var roznicaX = posNowX - posX;
    if( roznicaY >= -1 && roznicaY <= 1 && roznicaX >= -1 && roznicaX <= 1 )
    {
        czyMoge = true;
		posNowX=posX;
		posNowY=posY;
    }
    else
    {
        czyMoge = false;
    }
  console.log(czyMoge);
}
