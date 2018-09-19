let a = 1;
var b = 2;
console.log("Valor de a antes de entrar no if->",a);
console.log("Valor de b antes de entrar no if->",b);

if(a){
    let a = 3; var b = 5;
    console.log("Valor de a, dentro do if->",a);
    console.log("Valor de b, dentro do if->",b);
}

console.log("Valor final de a ->",a);
console.log("Valor final de b ->",b);