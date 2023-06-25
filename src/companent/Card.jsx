import {data} from "../data/data";


console.log(data)
const Card = () => {
  
  return (
    <div className='Card'>
    {
      data.map((item)=>{
       const {image , name , hour}=item;

      return (
        <div className="armut">
      <img src={image} alt="" />
      <section>
      <p>Lesson Name {name} </p>
      <p>Lesson Hour {hour} </p>
      </section>
      </div>
      
      )
      })
    }
   
    </div>
  )
}

export default Card
