import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Card = ({content,sn}) => {
   const {id} = useParams()
   
    const [userFontSize, setUserFontSize] = useState("1rem");
    const [sliderTracker, setSliderTracker] = useState(0);

    useEffect(()=> {
        if(sliderTracker == 0) {
            setUserFontSize("1rem");
        } 
        else if(sliderTracker >=0 && sliderTracker <= 25){
            setUserFontSize("1.19rem");
        } 
        else if(sliderTracker >=25 && sliderTracker <= 50) {
            setUserFontSize("1.37rem")
        } else if(sliderTracker >=50 && sliderTracker <= 75) {
            setUserFontSize("1.55rem")
        } else if(sliderTracker >=75 && sliderTracker <= 100) {
            setUserFontSize("1.75rem")
        }
    }, [sliderTracker])

  return (
<article className='card' style={{display: id == sn ? 'flex' : 'none', gap: '50px', width: '96%'}}>
    <div className='card__left'>
        <img height={100} width={100} src={`../src/assets/images/profilePics/${content.image}`} alt={content.image} style={{borderRadius: '5px', border: '1px solid white'}}/>
    </div>
    <div className='card__right'>
        <h4 style={{color: 'white', fontSize: '32px'}}>{content.name}</h4>
        <div className="input_slider" style={{margin: '30px 0px', display: 'flex', alignItems: 'center'}}>
            <h6 style={{marginRight: '22px', fontSize: '22px', color: 'white'}}>Popularity</h6>
        <input type="range" className="slider" min="0" max="100" key={sliderTracker} value={sliderTracker} onChange={(e)=>setSliderTracker(e.target.value)}/>
        </div>
        <div className='biography' style={{padding: '16px', borderRadius: '5px', backgroundColor: 'rgba(0,0,0,0.6)'}}>
            <h6 style={{fontSize: '22px', color: 'white', marginBottom: '10px'}}>Biography</h6>
            <p style={{color: 'white', fontSize: `${userFontSize}`, lineHeight: '1.5'}}>{content.biography}${userFontSize}`</p>
            <span>value: {}</span>
        </div>
    </div>
</article>
    )
}

export default Card