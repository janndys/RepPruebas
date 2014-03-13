/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Funcion que dibuja circulos, triangulos cuadrados y lineas en el Paper 
// Function draw diffirent Shapes.
           
           var clickHandler = function(){
                            alert("clicked");
                    };
            function cirlc(){
                var circle1 = paper.circle(80,80,20).attr({fill: "yellow"});
                 var rectangle = paper.rect(150,100,100,130).attr({fill: "red"});
                    
                    rectangle.click(clickHandler);
                    circle1.click(clickHandler)
            }
            function cuadrado(){
                var rect2 = paper.rect(20,500,100,100).attr({fill: "red"});
                rect2.click(clickHandler)
                    
            }
            function rectangulo(){
                 var rect3 = paper.rect(120,500,50,150).attr({fill: "green"});
                 
            }
            function triangulo(){
                var polilinea = paper.path('M 120 30 230 110 130 280 z').attr({"fill": "blue", "stroke-width": 2});; ;
            }
            function elipse(){
                var elipse = paper.ellipse(100, 100, 50, 30).attr({fill: "gray"});
                
                
            }
           
            