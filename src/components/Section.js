import React, {useState}  from 'react';
import reactDom from 'react-dom';
import styled, { keyframes } from 'styled-components';


const StyledSection = styled.div`
    background-color: pink;
    width: 50vw;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;

    position: relative;
    
`

const Day = styled.div`
    background-color: #00134d;
    line-height: 30px;
    min-width:15%;
    font-size: 2vw;
    font-weight:bold;
    border-right:1px solid gray;
    border-radius:10px;
    text-align:center;
    padding: 3% 0 3% 0;
    color: white;
`

const WeekendDay = styled(Day)`
    background-color:  #d6e0f5;
    color: black;
`

const ProgressBar = styled.div`
    height: 40px;
    width: ${({progress}) =>  progress || '0%' };   
    background-color: ${ ({progress}) =>{

            let stringValue = progress //extracting string value
            let noPercent = stringValue.slice(0,-1) //getting rid of percentage in the string
            let numericValue = parseInt(noPercent) //changing to numeric value
                if(numericValue <= 10) return '#9f4f42';
                else if(numericValue <=40 ) return '#e97a65';
                else if(numericValue <=60 ) return  '#fa8dd6';
                else if(numericValue <=80 ) return  '#9670aa';
                else if (numericValue <=100 ) return '#9670aa';
                else return '';
      }
    };
    border-radius: 10px;
    padding: 1% 0 1% 0;
`
   
const ProgressSection = styled.div`
    width:100%;
    margin-left: 1%;
`

const TodayProgress = styled(ProgressBar)`
    opacity:0.7;
`

const Form = styled.div`
    font-weight: 600;
    text-align: center;
    padding: 1% 0 1.5% 0;
    border:none;
    font-weight: 600;
    position: absolute;
    left: 57%;
    transform: translateX(-57%);
    width: 30%;
`;

const sectionDivAlignment = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const Section = ({text, progress, day}) => {
        const isWeekend = text.startsWith('S') //checking if weekend
        const todayDate = new Date()  //checking if today:
        const todayDayOftheWeek = todayDate.getDay() 
        const isToday = day === todayDayOftheWeek

        //form:
        const [value, setValue] = useState(''); //initial value of the state: value = useState(), setvalue =fn()

        
        const onChange = (event) => {
            console.log("CHANGE");
            setValue(event.target.value);
        }


        //button click:
        const [isClicked, toggleClick] = useState('false');
       

        const buttonClick = () => {
                toggleClick(prevClicked => !prevClicked);
        }

        
    return(
        <div style ={sectionDivAlignment}>
                <StyledSection > 
                    {isWeekend && <WeekendDay>{text}</WeekendDay>}
                    {!isWeekend && <Day>{text}</Day>}
                    <ProgressSection>
                        {isToday && <TodayProgress progress={value}></TodayProgress>}
                        {!isToday && <ProgressBar progress={value}></ProgressBar>} 
                    </ProgressSection>
                    <Form className ={`${isClicked ? "hidden" : "visible"}`} >
                                <form>
                                    <label>
                                        Score:
                                        <select onChange={onChange}>
                                            <option>0%</option>
                                            <option>10%</option>
                                            <option>20%</option>
                                            <option>30%</option>
                                            <option>40%</option>
                                            <option>50%</option>
                                            <option>60%</option>
                                            <option>70%</option>
                                            <option>80%</option>
                                            <option>90%</option>
                                            <option>100%</option>
                                        </select>
                                    </label>
                                </form>
                    </Form>
               </StyledSection>
                <button onClick={buttonClick}>{`${isClicked? "add score" : "hide seletion"}`} </button>
        </div>
    )
}

export default Section;