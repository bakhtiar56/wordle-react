export const boardDefault = [["", "", "", "", ""],
                            ["", "", "", "", ""],
                            ["", "", "", "", ""],
                            ["", "", "", "", ""],
                            ["", "", "", "", ""],
                            ["", "", "", "", ""]]


export const generateWord=async()=>{
    let wordSet;
    try{
   const res= await fetch("https://thatwordleapi.azurewebsites.net/get/")
   const data=await res.json()
   return data.Response

    }
    catch(err){
        console.log(err)
    }
}