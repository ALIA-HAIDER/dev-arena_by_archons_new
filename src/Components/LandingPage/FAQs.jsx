import './FAQs.css'
import data from '../../Modules/FAQdata'
import { useState } from 'react'
import { DirectDown } from 'iconsax-react';
function FAQ_section({i}){

   const [isclicked,setclick]=useState("false")
const handleclick=()=>{
    setclick(!isclicked)
}
const Example = () => {
    // then use it as a normal React Component
    return <DirectDown />;
  };
    return(
<>

{/* <div className="FAQ-box">
   <div className={`question ${isclicked?'question-reset':''}`} onClick={handleclick} > <h3>{data[i].Question}</h3></div>
    <div className={`${isclicked?'answer':'answer-display'}`}><p>{data[i].Answer}</p></div>
    {/* <div className="dropdown"><img src="" alt="" /></div> 
    </div>
    */}


<div className="accordian  "  onClick={handleclick}>
    <div className="question">
        <h4>{data[i].Question}</h4>
      <div className="icon">  <DirectDown size="20" color="#FF8A65" className={`${isclicked?'':'icon-active'}`}/></div>
    </div>
<div className={`answer ${isclicked?'':'answer-active'}`}>
    <p>{data[0].Answer}</p>
</div>
</div>




</>
    )
}

export default FAQ_section