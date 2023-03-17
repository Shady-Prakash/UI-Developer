import Card from '../../components/Card'
import data from '../../EmployeeData.json'

const index = () => {
  return (
    <section className='card__wrapper' style={{width: 'calc(100% - 350px', marginLeft: 'auto', position: 'absolute', top: '20%', left: '350px'}}>

  {  data.employees.map((item, index)=>(
    <Card key={index} content={item} sn={index}/>
  ))
    }
    </section>
  )
}

export default index