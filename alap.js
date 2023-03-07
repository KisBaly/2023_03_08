var div, sor, oszlop;
var leptet = 0;
var matrix=[];
var aktido=0;
var idozito;

var iranyvektorok = [ [-1,0],[1,0],//fuggoleges
                      [0,1],[0,-1],//vizszintes
                      [-1,1],[1,-1],//foatlo    
                      [-1,-1],[1,1] //mellekatlo    


                
                    ];
function jatekosVane(aktsor,aktoszlop,jatekos)
{
    return matrix[aktsor][aktoszlop] == jatekos;
}
function matrixSzelet(aktsor,aktoszlop)
{
    return aktsor<0 || aktsor >= sor || aktoszlop < 0|| aktoszlop >= oszlop;
}                    
function megszamol(irany,jatekos,startx,starty)
        {
                let db =1;
                while(!matrixSzelet(startx+iranyvektorok[irany][0]*db,starty+iranyvektorok[irany][1]*db) && 
                jatekosVane(startx+iranyvektorok[irany][0]*db,starty+iranyvektorok[irany][1]*db,jatekos))
                {
                    db++;
                }
                return db-1;
        }
function uresMatrix()

{
    for(var i = 0; i < sor; i++)
    {
        sorx=[];
        for(var j = 0; j < oszlop; j++)
        {
            sorx.push(0);
        }
        matrix.push(sorx);
    }
    console.log(matrix);
}


function kattint(td){
    if(td.innerHTML == "")
    {
        let jatekos="X";
        if(leptet % 2 ==0){
           
                td.innerHTML = "X";
                matrix[td.dataset.sor][td.dataset.oszlop]="X";
            }
        
        else{
            jatekos="O";
                td.innerHTML = "O";
                matrix[td.dataset.sor][td.dataset.oszlop]="O";
        }
        for(let i = 0; i < iranyvektorok.length; i++)
        {
            console.log(megszamol(i,jatekos,Number(td.dataset.sor),Number(td.dataset.oszlop)))
        }
        leptet++;
        if(sor > 5 && oszlop >5)
        {
            for(let i = 0; i<8;i+=2)
            {
                if(megszamol(i,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+
                megszamol(i+1,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+1==5)
                {
                    console.log("Nyert:"+jatekos);
                    var nyert = getElementById("nyert");
                    nyert.innerHTML="Nyert"+jatekos;
                }
                
            }
        }
        else if(sor == 4 && oszlop == 4)
        {
            for(let i = 0; i<8;i+=2)
            {
                if(megszamol(i,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+
                megszamol(i+1,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+1==4)
                {
                    console.log("Nyert:"+jatekos);
                    var nyert = getElementById("nyert");
                    div.nyert.innerHTML="Nyert"+jatekos;
                }
                
            }
        }
        else if(sor < 4 && oszlop <4)
        {
            for(let i = 0; i<8;i+=2)
            {
                if(megszamol(i,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+
                megszamol(i+1,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+1==3)
                {
                    console.log("Nyert:"+jatekos);
                    var nyert = getElementById("nyert");
                    nyert.innerHTML="Nyert"+jatekos;
                }
                
            }
        }
        }
       
        
    }
   



function TablaGeneralas(){
    sor = document.getElementById("sor").value;
    oszlop = document.getElementById("oszlop").value;
    div = document.getElementById("eredmeny");
    div.innerHTML = "";
    
    console.log(sor, oszlop);
    uresMatrix();
    var table = document.createElement("table");
    for (let i = 0; i < sor; i++){
        let tr = document.createElement("tr");
        for (let j = 0; j < oszlop; j++) {
            let td = document.createElement("td");
            td.setAttribute("onclick", "kattint(this)");
            td.dataset.sor=i;
            td.dataset.oszlop=j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    div.appendChild(table);
}

function reset()
{

}
function aktidonovel()
{
    aktido+=100;
    document.getElementById("ido").innerHTML=aktido/1000;
}
function Kesleltetes()
{

    idozito = setInterval(aktidonovel,100);
    let divek = document.getElementById("ido").getElementsByTagName("div");
    for(let i = 0; i < divek.length; i++)
    {
        divek[i].setAttribute("onmouseover","eltuntet(this)");

    }
    start=Date.now();
}



























































































































































































































































































































































































































































































