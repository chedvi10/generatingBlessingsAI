import  { useState } from'react';


const Birthday = (props) =>{
    
    return(
        <>
        <div id="birthday-questions" className="container">
          <label htmlFor="age"><h3>לאיזה גיל מיועדת הברכה?</h3></label>
          <input type="number" id="age" value={props.age} onChange={(e) => props.setAge(e.target.value)}/>
          <label htmlFor="birthMonth"><h3>בחר חודש ליום ההולדת:</h3></label>
          <select id="birthMonth" name="birthMonth" value={props.birthMonth} onChange={(e) => props.setBirthMonth(e.target.value)}>
            <option value="תשרי">תשרי</option>
            <option value="חשון">חשון</option>
            <option value="כסליו">כסליו</option>
            <option value="טבת">טבת</option>
            <option value="שבט">שבט</option>
            <option value="אדר">אדר</option>
            <option value="ניסן">ניסן</option>
            <option value="אייר">אייר</option>
            <option value="October">סיון</option>
            <option value="תמוז">תמוז</option>
            <option value="אב">אב</option>
            <option value="אלול">אלול</option>
          </select>
          
        </div>
    
        </>
    );


};
export default Birthday;