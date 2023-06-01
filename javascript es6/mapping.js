const companies = [
    {name:"HP", category:"Laptop",start:1922,end:2023},
    {name:"Dell", category:"Laptop",start:1956,end:2033},
    {name:"Samsung", category:"Mobile",start:1983,end:2088},
]
const numbers = [23,53,2,241,343,5325,56]
// for (let i=0; i<=companies.length; i++)
// {
//     console.log(companies[i])
// }
companies.map((company, indexes)=>(console.log(company,indexes)))