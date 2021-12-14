import DeleteIcon from '@material-ui/icons/Delete';
import React from "react";
const CardShow=(props)=>{
    return(
        <>
            <div className="cardShow">
                <div className="show">
                    <h4>{props.title}</h4>
                    <p>{props.content}</p>
                    <div className="delBtn">
                        <DeleteIcon />
                    </div>
                    {/* <button className="Delbtn btn btn-primary">❌</button> */}
                </div>
            </div>
            
        </>
    )
}
export default CardShow;