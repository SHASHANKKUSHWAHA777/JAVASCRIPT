//to find female in an array of objects
let allUsers = [{
    firstname : "Shashank",
    gender : "male"
},
{
    firstname : "ayush",
    gender : "male"
},
{
    firstname : "atharva",
    gender : "male"
},
{
    firstname : "vansh",
    gender : "male"
},
{
    firstname : "rosee",
    gender : "female"
}]

for(let i = 0 ; i < allUsers.length ; i++)
{
    if(allUsers[i]["gender"] == "female")
        console.log(allUsers[i]["firstname"])
    else
        console.log("she not found")
}
//if array is like normal , eg [1,2,3] , we can access it like arr[i]
//if array of objects , eg [{}] , we access it like arr[i]["gender or whatever"]

