import { useState } from 'react';
import pencilImage from '../images/pencil.png';

const Types = (props) => {
    

    return (
        <>
            <br />
            <label htmlFor="blessing-type">
                <h2>איזה סוג ברכה?</h2></label>
            <input type="radio" id="poem" name="blessing-type" value="שיר מחורז" checked={props.blessingType === 'poem'} onChange={(e) => props.setBlessingType(e.target.value)} />
            <label htmlFor="poem">שיר מחורז</label>

            <input type="radio" id="short" name="blessing-type" value="ברכה קצרה" checked={props.blessingType === 'short'} onChange={(e) => props.setBlessingType(e.target.value)} />
            <label htmlFor="short">ברכה קצרה</label>

            <input type="radio" id="long" name="blessing-type" value="ברכה ארוכה" checked={props.blessingType === 'long'} onChange={(e) => props.setBlessingType(e.target.value)} />
            <label htmlFor="long">ברכה ארוכה</label>

            <input type="radio" id="letter" name="blessing-type" value="מכתב" checked={props.blessingType === 'letter'} onChange={(e) => props.setBlessingType(e.target.value)} />
            <label htmlFor="letter">מכתב</label>
            <br />
            <br />
            <label htmlFor="atmosphere">
                <h2>באיזו אווירה הברכה?</h2></label>
            <input type="radio" id="happy" name="atmosphere" value="שמחה" checked={props.atmosphere === 'happy'} onChange={(e) => props.setAtmosphere(e.target.value)} />
            <label htmlFor="happy">שמחה</label>

            <input type="radio" id="entertaining" name="atmosphere" value="משעשעת" checked={props.atmosphere === 'entertaining'} onChange={(e) =>props.setAtmosphere(e.target.value)} />
            <label htmlFor="entertaining">משעשעת</label>

            <input type="radio" id="funny" name="atmosphere" value="מצחיקה" checked={props.atmosphere === 'funny'} onChange={(e) => props.setAtmosphere(e.target.value)} />
            <label htmlFor="funny">מצחיקה</label>

            <input type="radio" id="exciting" name="atmosphere" value="מרגשת" checked={props.atmosphere === 'exciting'} onChange={(e) => props.setAtmosphere(e.target.value)} />
            <label htmlFor="exciting">מרגשת</label>
            <br></br>
            <br></br>
            
        </>
    );
};
export default Types;