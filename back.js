function gaussJordan(A, B) {
    let n = A.length;
    // Concatenar A y B
    let AB = A.map((row, i) => row.concat(B[i]));
    console.log("VISUALIZACIÓN DE LA MATRIZ \n");
    console.log(AB);
    // Eliminación hacia adelante
    for (let i = 0; i < n; i++) {
        // Buscar el pivote máximo en la columna i
        let pivot = i;
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(AB[j][i]) > Math.abs(AB[pivot][i])) {
                pivot = j;
            }
        }

        
        
        
        // Intercambiar filas si es necesario
        if (pivot != i) {
            [AB[i], AB[pivot]] = [AB[pivot], AB[i]];
        }
        // Reducir los elementos debajo del pivote a cero
        for (let j = i + 1; j < n; j++) {
            let factor = AB[j][i] / AB[i][i];
            for (let k = i; k < n + 1; k++) {
                AB[j][k] -= factor * AB[i][k];
            }
        }
    }
    // Sustitución hacia atrás
    let x = Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        x[i] = AB[i][n] / AB[i][i];
        for (let j = 0; j < i; j++) {
            AB[j][n] -= AB[j][i] * x[i];
        }
    }
    return x;
}

function muestra3(){
    var barcaza3=document.getElementById("barcazas3");
    var barcaza5=document.getElementById("barcazas5");
    var res=document.getElementById("h2res");

    barcaza3.style.display="block";
    barcaza5.style.display="none";
    res.style.display="block";

}

function muestra5(){
    var barcaza3=document.getElementById("barcazas3");
    var barcaza5=document.getElementById("barcazas5");
    var res=document.getElementById("h2res");

    barcaza3.style.display="none";
    barcaza5.style.display="block";
    res.style.display="block";
}


//HOLA  
function get_valores3(){
    var val1_1=parseFloat(document.getElementById("bar1_11").value);
    var val1_2=parseFloat(document.getElementById("bar1_12").value);
    var val1_3=parseFloat(document.getElementById("bar1_13").value);
    var val2_1=parseFloat(document.getElementById("bar1_21").value);
    var val2_2=parseFloat(document.getElementById("bar1_22").value);
    var val2_3=parseFloat(document.getElementById("bar1_23").value);
    var val3_1=parseFloat(document.getElementById("bar1_31").value);
    var val3_2=parseFloat(document.getElementById("bar1_32").value);
    var val3_3=parseFloat(document.getElementById("bar1_33").value);
    var val_ind1=parseFloat(document.getElementById("ind1_1").value);
    var val_ind2=parseFloat(document.getElementById("ind1_2").value);
    var val_ind3=parseFloat(document.getElementById("ind1_3").value);
    var resx=document.getElementById("barcazax");
    var resy=document.getElementById("barcazay");
    var resz=document.getElementById("barcazaz");

    var matA=[[val1_1,val1_2,val1_3],[val2_1,val2_2,val2_3],[val3_1,val3_2,val3_3]];
    var matB=[val_ind1,val_ind2,val_ind3];
    var resultado=gaussJordan(matA,matB)
    resx.textContent="barcaza Angeka:"+parseInt(resultado[0])+" viajes"
    resy.textContent="barcaza María:"+parseInt(resultado[1])+" viajes"
    resz.textContent="barcaza Hanahui:"+parseInt(resultado[2])+" viajes"

}

function get_valores5(){
    var val1_1=parseFloat(document.getElementById("bar2_11").value);
    var val1_2=parseFloat(document.getElementById("bar2_12").value);
    var val1_3=parseFloat(document.getElementById("bar2_13").value);
    var val1_4=parseFloat(document.getElementById("bar2_14").value);
    var val1_5=parseFloat(document.getElementById("bar2_15").value);
    var val2_1=parseFloat(document.getElementById("bar2_21").value);
    var val2_2=parseFloat(document.getElementById("bar2_22").value);
    var val2_3=parseFloat(document.getElementById("bar2_23").value);
    var val2_4=parseFloat(document.getElementById("bar2_24").value);
    var val2_5=parseFloat(document.getElementById("bar2_25").value);
    var val3_1=parseFloat(document.getElementById("bar2_31").value);
    var val3_2=parseFloat(document.getElementById("bar2_32").value);
    var val3_3=parseFloat(document.getElementById("bar2_33").value);
    var val3_4=parseFloat(document.getElementById("bar2_34").value);
    var val3_5=parseFloat(document.getElementById("bar2_35").value);

    var val_ind1=parseFloat(document.getElementById("ind2_1").value);
    var val_ind2=parseFloat(document.getElementById("ind2_2").value);
    var val_ind3=parseFloat(document.getElementById("ind2_3").value);
    
    var resx=document.getElementById("barcazax2");
    var resy=document.getElementById("barcazay2");
    var resz=document.getElementById("barcazaz2");

    var matA=[[val1_1,val1_2,val1_3,val1_4,val1_5],[val2_1,val2_2,val2_3,val2_4,val2_5],[val3_1,val3_2,val3_3,val3_4,val3_5]];
    var matB=[val_ind1,val_ind2,val_ind3];
    var resultado=gaussJordan(matA,matB)
    resx.textContent="barcaza Angeka:"+parseInt(resultado[0])+" viajes"
    resy.textContent="barcaza María:"+parseInt(resultado[1])+" viajes"
    resz.textContent="barcaza Hanahui:"+parseInt(resultado[2])+" viajes"    

}



