import DeleteIcon from '@material-ui/icons/Delete';
import React from "react";
const CardShow=(props)=>{
    // const delBtn=()=>{
    //     console.log('btn is clicked');
    // }
    return(
        <>
            <div className="cardShow">
                <div className="show">
                    <h4>{props.title}</h4>
                    <p>{props.desc}</p>
                    <div className="delBtn">
                        <DeleteIcon onClick={()=>{
                            props.onSelect(props.id);
                        }} />
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default CardShow;