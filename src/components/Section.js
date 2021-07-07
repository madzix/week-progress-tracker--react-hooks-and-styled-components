import React, {useState}  from 'react';
import reactDom from 'react-dom';
import styled, { keyframes } from 'styled-components';


const StyledSection = styled.div`
    color:#333333;
    font-size: 1.7vw;
    width: 40vw;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    margin-top: 3%;
    border-bottom: 2px solid #999999;
        &:hover{
            border-bottom: 2px solid black;
            font-size: 2.3vw;
            animation: dayTexthover .3s;
        }
`

const Day = styled.div`
    line-height: 30px;
    min-width:15%;
    font-weight:bold;
    border-radius:2px;
    text-align: center;
    padding: 3% 0 3% 0;
    opacity:0;
    animation: left .2s ease-out forwards;
    animation-delay: 0.2s;
`

const WeekendDay = styled(Day)`
    color: #333333;
`

const ProgressBar = styled.div`
    height: 3px;
    width: ${({progress}) =>  progress || '0%' };   
    background-color: ${ ({progress}) => {
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
    width: 95%;
    margin-left: 1%;
`

const TodayProgress = styled(ProgressBar)`
    opacity:0.7;
`

const Form = styled.div`
    width: 84%;
    background-color: white;
    font-weight: 600;
    text-align: center;
    padding: .3% 0 .5% 0;
    border:none;
    border-radius: 30px;
    position: absolute;
    left: 100%;
    transform: translateX(-100%);
    z-index: 1;
    background-color: rgb(255,255,255, 0.5);
`;

const Button = styled.button `
    cursor: pointer;
    margin-left: 3%;
    margin-top: 3%;
    width: 3em;
    height: 2.5em;
    padding: 0.4% 0 0.5% 0;
    border-radius: 50%;
    border: 2px solid black;
    font-weight: 600;
    font-size: .8em;
    background-color: #FCE1D6;
    color: #191919;
    animation: right .2s ease-in-out forwards;
    animation-delay: .5s;
    opacity: 0;
    &:hover {
        background-color: #191919; 
        color: #FCE1D6;
    }
`


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
        const [value, setValue] = useState(''); //initial value of the state: value = useState(), setvalue = fn()

        
        const onChange = (event) => {
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
                                        <select onChange={onChange}>
                                            <option>Select</option>
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
               <Button  onClick={buttonClick}>{`${isClicked? "+" : "-"}`} </Button>
        </div>
    )
}

export default Section;