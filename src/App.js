import {Component} from 'react'
import './styles/app.css'
class App extends Component{
state={
  stri:"",
  
}
enteredText=(event)=>{
  this.setState({
    stri:event.target.value
  })
}
render(){
    const{stri}=this.state
    const len=stri.length;
   
    return(
      <div className='top'>
      <div className="container">
        <div className='one'>
        
          <h1>Calculate the letters you enter</h1>
          <h2>Enter the String</h2>
            <input type="search" value={stri} onChange={this.enteredText}/>
            <p class="para">No of charactes:<span style={{color:"blue"}}> {len}</span></p>
          </div>
          <div className='two'>
          <img src="https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY4NTE3MzgwMDQ0NjI5Nzgy/how-to-calculate-cost-of-goods-sold-for-your-business.png" alt="" class="image"/>
          </div>
      </div>    
    </div>  
    )
  }
}
export default App