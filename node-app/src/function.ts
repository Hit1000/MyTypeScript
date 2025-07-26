function say(s:string){
    console.log("Hello", s);
}

function sum(a:number, b:number):number{
    return a+b;
}

function runAfter1s(fn:()=>void){
    setTimeout(fn, 1000);
}


say("hit")
say("singla")

console.log(sum(1,3));
runAfter1s(function(){
    console.log("run after 1s");
})