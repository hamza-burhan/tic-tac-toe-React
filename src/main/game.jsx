import { useState } from 'react';
import './game.css'
import { useEffect } from 'react';
export default function Game (){
    const [showcircle, setshowcircle] = useState(false);
const [showCrossleicon, setshowCrossleicon] = useState(false);
const [indexnumber,setindexnumber] = useState(0)
const toggle = (index) => {
    setshowcircle(true)
    console.log(index)
    setindexnumber(index)
    // const tempcircle = [...showCircleicon];
    // tempcircle[index] = !tempcircle[index];

    // const tempcross = [...showCrossleicon];
    // tempcross[index] = !tempcross[index];

    // setshowCircleicon(tempcircle);
    // setshowCrossleicon(tempcross);
};
   
    return(
        <>
            <div className='main'>
                <div className='game-container'>
                    <div  className='cells' onClick={() => toggle(1)}>      
                        {showCrossleicon && <i style={{fontSize:'5rem'}} class='fa fa-close'></i>}
                        {indexnumber === 1 && <i style={{fontSize:'5rem'}} class='fa fa-circle-thin'></i>}
                    </div>
                    <div  className='cells' onClick={() => toggle(2)}>        
                        {showCrossleicon && <i style={{fontSize:'5rem'}} class='fa fa-close'></i>}
                        {indexnumber === 2 && <i style={{fontSize:'5rem'}} class='fa fa-circle-thin'></i>}
                    </div>
                    <div  className='cells' onClick={() => toggle(3)}>        
                        {showCrossleicon && <i style={{fontSize:'5rem'}} class='fa fa-close'></i>}
                        {showcircle && <i style={{fontSize:'5rem'}} class='fa fa-circle-thin'></i>}
                    </div>
                    <div  className='cells' onClick={() => toggle(4)}>        
                        {showCrossleicon && <i style={{fontSize:'5rem'}} class='fa fa-close'></i>}
                        {showcircle && <i style={{fontSize:'5rem'}} class='fa fa-circle-thin'></i>}
                    </div>
                    <div  className='cells' onClick={() => toggle(5)}>        
                        {showCrossleicon && <i style={{fontSize:'5rem'}} class='fa fa-close'></i>}
                        {showcircle && <i style={{fontSize:'5rem'}} class='fa fa-circle-thin'></i>}
                    </div>
                    <div  className='cells' onClick={() => toggle(6)}>        
                        {showCrossleicon && <i style={{fontSize:'5rem'}} class='fa fa-close'></i>}
                        {showcircle && <i style={{fontSize:'5rem'}} class='fa fa-circle-thin'></i>}
                    </div>
                    <div  className='cells' onClick={() => toggle(7)}>        
                        {showCrossleicon && <i style={{fontSize:'5rem'}} class='fa fa-close'></i>}
                        {showcircle && <i style={{fontSize:'5rem'}} class='fa fa-circle-thin'></i>}
                    </div>
                    <div  className='cells' onClick={() => toggle(8)}>        
                        {showCrossleicon && <i style={{fontSize:'5rem'}} class='fa fa-close'></i>}
                        {showcircle && <i style={{fontSize:'5rem'}} class='fa fa-circle-thin'></i>}
                    </div>
                    <div  className='cells' onClick={() => toggle(9)}>        
                        {showCrossleicon && <i style={{fontSize:'5rem'}} class='fa fa-close'></i>}
                        {showcircle && <i style={{fontSize:'5rem'}} class='fa fa-circle-thin'></i>}
                    </div>  
                </div>
            </div>
        </>
    )
}
