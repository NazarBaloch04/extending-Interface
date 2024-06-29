interface   Object{
    name: string
    age: number
}
interface Employee extends Object{
    email: string
    id: 7
}
interface Director extends Employee{
   role: boolean
}
let object : Object = {
    name: "Nazar Baloch",
    age: 19

}
let employee : Employee ={
    name: "Nazar Mazari",
    age: 19,
email: "mazarinazarali",
id: 7
}
let director: Director = {
    
    name: "Nazar Mazari",
    age: 19,
email: "mazarinazarali",
id: 7,
role: true
}
console.log(director);
