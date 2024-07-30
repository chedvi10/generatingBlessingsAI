import { useState } from 'react';
import axios from 'axios';
import pencilImage from '../images/pencil.png';
import Birthday from './Birthday';
import Wedding from './Wedding';
import Baby from './Baby';
import Types from './Types';



const EventForm = () => {
    const [showResponse, setShowResponse] = useState(false);
    const [event, setEvent] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [babyGender, setBabyGender] = useState('');
    const [wedding, setWedding] = useState('');
    const [blessingType, setBlessingType] = useState('');
    const [atmosphere, setAtmosphere] = useState('');
    const [blessings, setBlessings] = useState([]);
    const [currentBlessingIndex, setCurrentBlessingIndex] = useState(0);


    const buildPrompt = () => {
        let prompt = `כתוב ברכה ל${name}, מין:${gender},`
        prompt += ` עבור: ${event}.`;
        if (event === 'יומולדת') {
            prompt += ` לגיל ${age} בחודש ${birthMonth}`;
        } else if (event === 'הולדת תינוק') {
            prompt += `מין התינוק הוא :${babyGender}.`;
        } else if (event === 'חתונה') {
            prompt += `זו ברכה עבור ${wedding} שמתחתנ/ת`;
        }

        prompt += ` הברכה צריכה להיות בסגנון ${blessingType}`;
        prompt += ` ובאווירה ${atmosphere}.`;

        return prompt;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const prompt = buildPrompt();
        
        try {
          const response = await axios.post('http://localhost:8989/prompts',  {prompt} );
          setBlessings(Object.values(response.data));
          setShowResponse(true);
        } catch (error) {
          console.error('Error fetching blessings:', error);
          // כאן תוכל להוסיף טיפול בשגיאות
        }
      };
    const getNextBlessing = () => {
        setCurrentBlessingIndex(prevIndex => {
            if (prevIndex + 1 >= blessings.length) {
                handleSubmit(); // בקש ברכות חדשות אם נגמרו
            }
            return prevIndex + 1;
        });
    };
    return (
        <>
            <h1>
                <img id='image' src={pencilImage} alt="Pencil" />
                שלום<span id="white"> וברכה:)</span>
            </h1>
            <h2>צריכים ברכה? בשביל זה אנחנו פה!!!</h2>
            <hr />

            <form action="/promts" onSubmit={handleSubmit} >
                <label htmlFor="age"><h3>עבור מי הברכה? כתוב את שמו:</h3></label>
                <input type="text" placeholder='עבור:' id="age" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="radio" id="gender" name="gender" value="זכר" checked={gender === 'זכר'} onChange={(e) => setGender(e.target.value)} />
                <label htmlFor="זכר">זכר</label>
                <input type="radio" id="gender" name="gender" value="נקבה" checked={gender === 'נקבה'} onChange={(e) => setGender(e.target.value)} />
                <label htmlFor="נקבה">נקבה</label>
                <br />

                {!showResponse ? (<>
                    <h2>בחר את הארוע שלך:</h2>
                    <select id="event-select" onChange={(e) => setEvent(e.target.value)}>
                        <option>בחירת אירוע</option>
                        <option value="יומולדת">יומולדת</option>
                        <option value="הולדת תינוק">הולדת תינוק</option>
                        <option value="חתונה">חתונה</option>
                        <option value="בר מצווה">בר מצווה</option>
                        <option value="חלאקה"> חלאקה</option>
                        <option value="בת מצווה">בת מצווה</option>
                    </select>


                    {event === 'יומולדת' && <Birthday setAge={setAge} setBirthMonth={setBirthMonth}></Birthday>}
                    {event === 'הולדת תינוק' && <Baby setBabyGender={setBabyGender}></Baby>}
                    {event === 'חתונה' && <Wedding setWedding={setWedding}></Wedding>}
                    {
                        event != '' && (
                            <Types setBlessingType={setBlessingType} setAtmosphere={setAtmosphere}></Types>
                        )
                    }
                </>) : <div>
                    <div>
                        <p>אירוע: {event}</p>
                        <p>סוג ברכה: {blessingType}</p>
                        <p>אווירה: {atmosphere}</p>
                    </div>
                    <div>
                        <div>{blessings[currentBlessingIndex]}</div>
                        <button onClick={getNextBlessing}>אני רוצה משהו אחר</button>
                    </div>
                </div>}

                {
                    event != '' && !showResponse &&
                    (<button id="write-greeting" type='submit' >
                        כתוב לי ברכה!
                        <img id="small-image" src={pencilImage} alt="Pencil" />
                    </button>
                    )
                }
            </form>
            <br />
        </>
    );
};

export default EventForm;