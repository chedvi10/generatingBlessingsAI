import { useState } from "react";


const Wedding = (props) => {
    return(
        <>
        <div id="wedding-questions" className="container">
        <label htmlFor="wedd">מי מתחתן?</label>
        <br />
        <select id="wedd" name="wedding" value={props.wedding} onChange={(e) => props.setWedding(e.target.value)}>
        <option value="brother">----</option>
          <option value="אח">אח</option>
          <option value="אחות">אחות</option>
          <option value="אחיין">אחיין</option>
          <option value="אחיינית">אחיינית</option>
          <option value="נכד">נכד</option>
          <option value="נכדה">נכדה</option>
          <option value="חבר">חבר</option>
          <option value="חברה">חברה</option>
        </select>
      </div>
     
</>
    );
};
export default Wedding;
