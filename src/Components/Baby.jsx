import { useState } from 'react';


const Baby = (props) => {
    
    return (
        <>
            <div id="baby-questions" className="container">
                <h2>מזל טוב!!!</h2>
                <label htmlFor="gender">תינוק או תינוקת?</label>
                <br />
                <select id="gender" value={props.babyGender} onChange={(e) => props.setBabyGender(e.target.value)}>
                    <option value="boy">מין</option>
                    <option value="girl">תינוקת</option>
                    <option value="boy">תינוק</option>
                </select>
            </div>
        </>
    );
};
export default Baby;