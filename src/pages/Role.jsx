import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import supabase from '../supabase'
import Loader from '../components/Loader'
import '../App.css'
function Role() {
    const {roleId} = useParams()
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const getRole = async () => {
          setIsLoading(true)
            let {data, error} = await supabase.from('role-data').select('*').eq('id', roleId).single()
            if (error) {
                console.log(error)
            }
            else {
                setData(data)
                setIsLoading(false)
            }

        }
        getRole()
    }, [roleId])


  return (
    <>
     <div className="container">
      <div className="header">
        <h1 className="title">{data.role}</h1>
        
      </div>
      <Link className="button" to="/">חזרה לדף הבית</Link>
      {isLoading && <Loader />}
                {!isLoading && (
                    <div className="content">
                        <h2>תיאור התפקיד:</h2>
                        <p className="description">{data.roleDescription}</p>
                        <h2>שכר ממוצע:</h2>
                        <p className="salary">{data.avgSalary} ש"ח</p>
                        <h2>טכנולוגיות:</h2> 
                        <div className='stack'>
                            {data.RoleStack?.split(',')?.map(tool => (
                                <span key={tool.trim()}>{tool.trim()}</span>
                            )) ?? 'בטעינה'}
                        </div>
                    </div>
                )}
    </div>

       </>
  )
}

export default Role