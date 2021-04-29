
import React, {useState} from 'react';
import {Component} from 'react';
import './Style.css';

 var str:string = "ball";
 var touched_str:string = "round";
 var comput:string="roundd";

 var game1:string="Game Over! You win ";
 var game2:string="Game Over! Computer win";
 var game3:string="The match is running";

 let element1,element2,element3,element4,element5,element6,element7,element8,element9,po,ans;


 function Ball () {
        
        const[state1,s1]=useState(0);const[state2,s2]=useState(0);const[state3,s3]=useState(0);
        const[state4,s4]=useState(0);const[state5,s5]=useState(0);const[state6,s6]=useState(0);
        const[state7,s7]=useState(0);const[state8,s8]=useState(0);const[state9,s9]=useState(0);
        const[ok,so]=useState(false);

        if(state1===10)  {element1=<button className={touched_str}>1</button>;}
        else  {element1=<button className={str} onClick={() => s1(10)} >1</button>;}

        if(state2===10) {element2=  <button className={touched_str}>2</button>;}
        else  {element2= <button className={str} onClick={() => s2(10)} >2</button>;}

        if(state3===10) element3=  <button className={touched_str}>3</button>
        else  element3= <button className={str} onClick={() => s3(10)} >3</button>

        if(state4===10) element4=  <button className={touched_str}>4</button>
        else  element4= <button className={str} onClick={() => s4(10)} >4</button>

        if(state5===10) element5=  <button className={touched_str}>5</button>
        else  element5= <button className={str} onClick={() => s5(10)} >5</button>

        if(state6===10) element6=  <button className={touched_str}>6</button>
        else  element6= <button className={str} onClick={() => s6(10)} >6</button>

        if(state7===10) element7=  <button className={touched_str}>7</button>
        else  element7= <button className={str} onClick={() => s7(10)} >7</button>

        if(state8===10) element8=  <button className={touched_str}>8</button>
        else  element8= <button className={str} onClick={() => s8(10)} >8</button>

        if(state9===10) element9=  <button className={touched_str}>9</button>
        else  element9= <button className={str} onClick={() => s9(10)} >9</button>

        //console.log(state1);
        /// computer interface design 
        if(state1!=10 && state1!=0) {element1=  <button className={comput} >1</button>;}
        if(state2!=10 && state2!=0) {element2=  <button className={comput} >2</button>;}
        if(state3!=10 && state3!=0) {element3=  <button className={comput} >3</button>;}
        if(state4!=10 && state4!=0) {element4=  <button className={comput} >4</button>;}
        if(state5!=10 && state5!=0) {element5=  <button className={comput} >5</button>;}
        if(state6!=10 && state6!=0) {element6=  <button className={comput} >6</button>;}
        if(state7!=10 && state7!=0) {element7=  <button className={comput} >7</button>;}
        if(state8!=10 && state8!=0) {element8=  <button className={comput} >8</button>;}
        if(state9!=10 && state9!=0) {element9=  <button className={comput} >9</button>;}

        var user_win:boolean=false;
        var comp_win:boolean=false;

        po=<button className="but" onClick={() =>  so(true)}>Allow</button>;
        ans=<button className="res">The game is running </button>;

        if(user_win)  ans=<button className="res">Game over ! You win </button>;
        else if(comp_win)  ans=<button className="res">Game over ! Computer wins </button>;
       

        if( (state1==10 && state2==10 && state3==10) || (state1==10 &&state4==10&&state7==10) ) user_win=true;
        else if(state1==10 && state5==10&&state9==10) user_win=true;
        else if(state2==10&&state5==10&&state8==10) user_win=true;
        else if((state3==10&&state6==10&&state9==10) || (state3==10&&state5==10&&state7==10) ) user_win=true;
        else if(state4==10&&state5==10&&state6==10) user_win=true;
        else if(state7==10&&state8==10&&state9==10) user_win=true;

       if(!user_win && ok)
       {
        if(state1==0) {s1(2);element1=  <button className={comput} >1</button>;}
        else if(state2==0) {s2(2);element2=  <button className={comput} >2</button>;}
        else if(state3==0) {s3(2);element3=  <button className={comput} >3</button>;}
        else if(state4==0) {s4(2);element4=  <button className={comput} >4</button>;}
        else if(state5==0) {s5(2);element5=  <button className={comput} >5</button>;}
        else if(state6==0) {s6(2);element6=  <button className={comput} >6</button>;}
        else if(state7==0) {s7(2);element7=  <button className={comput} >7</button>;}
        else if(state8==0) {s8(2);element8=  <button className={comput} >8</button>;}
        else if(state9==0) {s9(2);element9=  <button className={comput} >9</button>;}
        so(false);
       }

       if( (state1==2 && state2==2 && state3==2) || (state1==2 &&state4==2&&state7==2) ) comp_win=true;
       else if(state1==2 && state5==2&&state9==2) comp_win=true;
       else if(state2==2&&state5==2&&state8==2) comp_win=true;
       else if((state3==2&&state6==2&&state9==2) || (state3==2&&state5==2&&state7==2) ) comp_win=true;
       else if(state4==2&&state5==2&&state6==2) comp_win=true;
       else if(state7==2&&state8==2&&state9==2) comp_win=true;

       if(user_win)  ans=<button className="res">Game over ! You win </button>;
       else if(comp_win)  ans=<button className="res">Game over ! Computer wins </button>;
        

    return (
        <div className="out">
            <p className="headingStyle">Tic-Tac-Toe</p>
            <div>
            {ans}
            </div>
            <div>
            {element1} 
            {element2} 
            {element3}
            </div>

            <div>
            {element4}
            {element5}
            {element6}
            </div>

            <div>
            {element7}
            {element8}
            {element9}
            </div>

            <div>
                Allow computer to pick a move --
                {po}
            </div>

        </div>
    )
}

export default Ball;