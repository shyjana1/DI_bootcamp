import React from 'react';


const Alert = (props) => {
    const colorClasses = {
        red: 'alert-danger',
        orange: 'alert-warning',
        green: 'alert-success'
      };
      
    
    
    
    
        
        if(props.show === false){
        return null;
        }
        else{
            return (
             <>
               <div className={`alert ${colorClasses.red}`} role="alert">
               {props.text1}
               </div>
               <div className={`alert ${colorClasses.orange}`} role="alert">
               {props.text2}
                </div>
                <div className={`alert ${colorClasses.green}`} role="alert">
               {props.text3}
                </div>
             </>
         );    
};
}
export default Alert;