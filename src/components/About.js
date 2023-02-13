import React from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color:'white',
    //     backgroundColor:'#212529',
    //     border:'1px solid white'
    // })
    let myStyle ={
      color:props.mode ==='dark' ? 'white' : 'black',
      backgroundColor:props.mode ==='dark' ? '#4f545a' : 'white'
    }
  return (
    <div className='container' style={myStyle} >
        <h1 className='my-4'>About Us</h1>
        <div className="accordion accordion-flush"  id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong>About App</strong> 
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"style={myStyle} >This App Was developed  For Learning The React Js. This App is Responsive and is easy to use<br></br> In this App You an Perform Various Actions On Your Text.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <strong>My Learnings</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>This is My first React Project.<br></br>In this Project I learnt basics of ReactJs where topics like props,satates,routing & many other hooks.</div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <strong>Credits</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>The Complete Credits of the App goes To code with Harry. It was Great learning experience During Development of this Project.<br></br>Thank You Code with Harry</div>
    </div>
  </div>
 </div>
</div>
  )
}
