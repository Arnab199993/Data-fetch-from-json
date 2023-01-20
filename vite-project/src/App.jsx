import './App.css'
import Blog from "./Blog.json"
export default function App() {
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit 🌀
      {
        Blog && Blog.map((result)=>{
          return (
            <div className='box'><li key={result.id}>{result.Name}</li>
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
