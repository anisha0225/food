import Header from "./components/Header"
import { Outlet } from "react-router-dom"

const Index = () => {
  return (
    <div>
        <Header />
        <main className='pt-16 bg-slate-100[min-w-[calc(100vh)]'>
          <Outlet />
        </main>
      </div>
  )
}

export default Index