/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Crea el espacio de trabajo
// Creates a world space.

function world(inf , sup , inc , gro){
                var i , j, k;
                j = 0;
                k = 27;
                var diminf , dimsup, desp;
                desp = 20;
                diminf = inf + desp;
                dimsup = sup - desp;
                
                var array = new Array();
                //var i, inf = 20,  sup = 700, inc = 20,  gro = 0.2;
                //var paper = Raphael("paper1", sup, sup);
                
                // Crea el recuadro de trabajo y setea el color azul de fondo.
                // Create rectangle world space ans set background blue color. 
                var rect1 = paper.rect(inf , inf , sup , sup).attr({fill: "#3C65AB"}); 
                //var iconos = paper.path("M16,30.534c8.027,0,14.534-6.507,14.534-14.534c0-8.027-6.507-14.534-14.534-14.534C7.973,1.466,1.466,7.973,1.466,16C1.466,24.027,7.973,30.534,16,30.534zM18.335,6.276l3.536,3.538l-6.187,6.187l6.187,6.187l-3.536,3.537l-9.723-9.724L18.335,6.276z").attr({fill: "#000", stroke: "none"});
                
                //Crea las lineas horizontales y verticales del spacio de trabajo "Paper"
                // Create vertical and horizontal lines in the "Paper"
                for (i = inf ; i <= sup ; i = inc + i){
                        
                       
                        paper.path("M" + i + " " + diminf +" " + i + " " + dimsup).attr({"stroke": "white", "stroke-width": gro,"stroke-dasharray": "."}); 
                        paper.path("M" + diminf + " " + i +" " + dimsup + " " + i).attr({"stroke": "white", "stroke-width": gro,"stroke-dasharray": "."});
                        paper.text(i + desp, sup - 10 , j).attr({"fill": "white"});
                        
                        paper.text(inf+10, i + desp , k).attr({"fill": "white"});
                        j++;
                        k--;
                } 
                
                return ("");
}