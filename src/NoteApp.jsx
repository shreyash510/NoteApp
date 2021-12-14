import React, { useState } from "react";
// import CardShow from './CardShow';

const NoteApp = (props) => {
    const [txt,setTxt]=useState({});
    // const [btn, setBtn]=useState([])
    const inputevent = (e) => {
        setTxt((preV)=>{
            return{
                ...preV,
                [e.target.name]:e.target.value
            }
        })
    }
    const btnClick = () => {
        props.passNote(txt);
        // console.log(txt)
        setTxt({
            title:'',
            desc:''
        })

    }
    return (
        <>
            <div className="container rounded my-4">
                <div className="cardbody shadow p-3 mb-5 rounded w-20">
                    <div className="mb-3">
                        <input value={txt.title} name="title" onChange={inputevent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                    </div>
                    <div className="mb-3">
                        <textarea value={txt.desc} name="desc" onChange={inputevent} className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Description here....." rows="3"></textarea>
                        <button onClick={btnClick} className="notebtn btn btn-primary">+</button>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                
            </div>
        </>
    )
}
export default NoteApp;