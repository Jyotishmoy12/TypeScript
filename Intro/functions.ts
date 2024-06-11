// function addTwo(num:number){
//     return num+2
// }

// addTwo(5)


// function addTwo(num){
//     // that's an issue we shouldnot be use it like that
//     num.toUpperCase()
//    return num+2
// }
// addTwo(3)

// function getUpper(val){
//     // so this is also a problem here val is treated like any but it should be a string

//     return val.toUpperCase()
// }

// getUpper(5)

// let loginUser=(name:string, email:string, isPaid:boolean=false) =>{}

// loginUser("h", "h@h.com")

// export {}


// function addTwo(num:number){
//     // this is not giving any errors but it's actually an error
//     return "hello"
// }
// so how to fix the above error -> by annotating
// function addTwo(num:number):number {
// //    return "hello"
//     return num + 2
// }

// function getValue(myVal:number):string{
//     if(myVal>5){
//         // then this gives error and if it is set as boolean the else return will give error
//         return true
//     }
//     return "200 ok"
// }

// const getHello=(s:string):string=>{
//     return ""
// }

// const heros=["thor", "spiderman", "ironman"]

// heros.map((hero):string=>{
//     return `hero is ${hero}`
// })


// function consoleError(errmsg:string):void{
//     console.log(errmsg)
// }

function handleError(errmsg:string):never{
    throw new Error(errmsg)
}