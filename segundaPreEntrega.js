console.log('Pre-entrega 2 en funcionamiento');
alert('Bienvenido a Calculadora de Credito')
let ingreso=0
let plazo=0
let TNA=0
let monto=0;
let Credito=[];
let Credito1=[];
let info=0;
let C=0;
const boton = document.querySelector('#boton')
const root = document.querySelector('#root')

function calculoCredito(TNA,ingreso,plazo){
    let j=TNA/12;
    C=(monto*j*(1+j)**plazo)/((1+j)**plazo-1);
    let Tp=0;
    let tpi=0;
    let Si=0;
    let ip=0;
    let Si0=monto;
    for(i=1;i<=plazo;i++){
        tpi=C-Si0*j-Si*j;    
        Tp=Tp+tpi;    
        Si=monto-Tp;
        ip=C-tpi;
        Si0=0
        Credito.push({Periodo:  i.toFixed(0), Capital:  tpi.toFixed(2) , Interes:  ip.toFixed(2), Cuota: C.toFixed(2), Saldo: Si.toFixed(2)});
    }
}

function visualizar (){
    
    if (info==1){
        Credito1.forEach(e => {
            title.innerText = 'Estos son los valores de Capital de cada cuota'
            const nuevop = document.createElement('li')
            nuevop.innerText=`Periodo: ${e.Periodo} Capital: ${e.Capital}` 
            root.append(nuevop)
        })
} else if(info==2){
    Credito1.forEach(e => {
        title.innerText = 'Estos son los valores de Interes de cada cuota'
        const nuevop = document.createElement('li')
        nuevop.innerText=`Periodo: ${e.Periodo} Interes: ${e.Interes}` 
        root.append(nuevop)
    })
}else if(info==3){
    Credito1.forEach(e => {
        title.innerText = 'Este es el Saldo correspondiente a cada periodo'
        const nuevop = document.createElement('li')
        nuevop.innerText=`Periodo: ${e.Periodo} Saldo: ${e.Saldo}` 
        root.append(nuevop)
    })
}else if(info==4){
        title.innerText = 'La cuota fija es de:'
        const nuevop = document.createElement('li')
        nuevop.innerText=`Cuota: ${C.toFixed(2)}` 
        root.append(nuevop)
}else if(info==5){
        title.innerText = 'La TNA del credito es:'
        const nuevop = document.createElement('li')
        nuevop.innerText=`TNA: ${TNA}` 
        root.append(nuevop)
}
}
function guardar (Credito){
    localStorage.setItem("Credito1",JSON.stringify(Credito));
        
    }
function extraer (){
    Credito1 = JSON.parse(localStorage.getItem("Credito1"))
}


    


boton.addEventListener('click', ()=>{
    localStorage.clear
    const in1= document.getElementById('ingreso')
    ingreso = in1.value 
    const in2= document.getElementById('plazo')
    plazo = in2.value 
    const input= document.getElementById('eleccion')
    info = input.value 
    monto=(ingreso*.2*plazo);
    TNA=10000/(ingreso/plazo);
    calculoCredito(TNA,monto,plazo)
    guardar(Credito);  
    extraer();
    visualizar();
    Credito=[];
})


