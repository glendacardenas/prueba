function setName(name){
    let result;

    try{    
        if(name.length <4 )throw "short";
        if (name.length > 10 ) throw "large";
        result = `el nombre ${name} es correcto`
    }catch (error){

        if (error == "short"){
            console.log("el error es muy corto")
        }else if (error=="large"){
        console.log("El error es muy largo")
        }
    }finally{
        console.log("finally")
        if (result){
            console.log("result", result)
        }
    }
    console.log("result", result)
}

