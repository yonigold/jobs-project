import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from '../supabase'
import CategoryButtons from "../components/CategoryButtons";
function Home() {
    const [data, setData] = useState([])
    



    const getData = async () => {
    let query = supabase.from('role-data').select('*')
    const { data, error } = await query
    if (error) {
        console.log(error)
    } else {
        setData(data)
    }
    }

    useEffect(() => {
        getData()
    }, [])

    const getTechRoles = async (category) => {
      let query = supabase.from('role-data').select('*')
      if (category === 'tech') {
        query = query.eq('isTech', true)
      } else {
        query = query.eq('isTech', false)
      }
      const {data, error} = await query
      if (error) {
        console.log(error)
      } else {
        setData(data)
      }

  }
    

    

  return (
    <main>
      <CategoryButtons getTechRoles={getTechRoles} getData={getData} />

    <div className="grid-container">
      {data.map((item) => {
        return (
          <div key={item.id} className="grid-item">
            <h2>
              <Link className="link" to={`/${item.id}`}>{item.role}</Link>
            </h2>
          </div>
        )
      })}
    </div>
  </main>

  )
}

export default Home