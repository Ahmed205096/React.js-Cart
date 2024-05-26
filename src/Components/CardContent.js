import './Card.css'
export default function CardContent(props) {
  return (
    <>
      <div className="Card">
        <div className='img-container'>
        <img src={props.image} alt="" />
        </div>
        <h4>{props.title}</h4>
        <p className='description'>{props.description}</p>
        <p className='price'>Price: ${props.price}</p>
      </div>
    </>
  );
}
