import React , {useState} from 'react'

function Time() {
    const dateForm = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };


      let date = new Date().toLocaleDateString("en-IN", dateForm);
      let time = new Date().toLocaleTimeString();
      const [ctime, setTime] = useState(time);
      const upDateTime = () => {
        let time = new Date().toLocaleTimeString();
        setTime(time);
      };
      setInterval(upDateTime, 1000);

      const [toggled , setToggled] = useState(false);
      const toggleState = () =>{
        setToggled(!toggled);
    }



      

    return (
        <div>
            <div className='main-container'>
                <center>
                <h1 className='heading'>Digital Clock</h1>

                <label class="switch">
                <input type="checkbox" checked={toggled} onClick={toggleState}/>
                <span class="slider round"></span>
                </label>
                <div className='timediv'>
                    <h3 className='time' id="time">{ctime}</h3>
                    {toggled ? <p id="date">{date}</p> : <></>}
                </div>
                </center>
            </div>
        </div>
    )
}

export default Time
