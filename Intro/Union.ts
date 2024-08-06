// let score:number| string = 33

// score=44
// score="55"

// type User={
//     name:string;
//     id:number;
// }

// type Admin={
//     username:string;
//     id:number;
// }

// let jyotishmoy:User | Admin = {
//     name: "jyotishmoy", id:334
// }

// jyotishmoy={
//     username: "jd",
//     id:334
// }

// function getDbId(id:number | string){
//    console.log(`Db id is ${id}`) 
// }

getDbId(3)
getDbId("3")

function getDbId(id:number | string){
    // console.log(`Db id is ${id}`) 

    //id.toLowerCase() // that's not possible

    if(typeof id === "string"){
        id.toLowerCase()
    }
    

}

//array

// const data:number[]=[1,2 3,"4"] // not allowed
// const data2:string[]=["1", "2", "3"]
// const data3:(string | number)[]=["1", "2", "3"]

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment="aisle"
// seatAllotment="crew"