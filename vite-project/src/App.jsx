import './App.css'
import Blog from "./Blog.json"
export default function App() {
  const students=[
    {Student:"Arnab",id:1},
    {Student:"Sameer",id:2},
    {Student:"Prakash",id:3}
  ]
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit 🌀
      {
        Blog && Blog.map((result)=>{
          return (
            <div>
              {students && students.map((stdata)=>(
              <li key={stdata}>{stdata.Student}</li>
              ))}

              
              <li key={result.id}>{result.Name}</li>
             {result.tech && result.tech.map((data)=>{
              return (<strong key={result.id}>{data.Course}</strong>)
             })}
            </div>
            
          )
        })
      }
    </main>
  )
}
