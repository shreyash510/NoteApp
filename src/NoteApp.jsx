import React, { useState } from "react";
import CardShow from "./CardShow";
// import CardShow from './CardShow';

const NoteApp = () => {
    const [txt,setTxt]=useState({});
    const [btn, setBtn]=useState([]);
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
        setBtn((oldV)=>{
            return[
                ...oldV,txt
            ];
        });
        setTxt({
            title:'',
            desc:''
        });
    };
    const delCard=(id)=>{
        setBtn((oldV)=>{
            return oldV.filter((arrEle, index)=>{
                return index !== id;
            });
        });
    }
    return (
        <>
            <div className="container rounded my-4">
                <div className="cardbody shadow p-3 mb-5 rounded w-20">
                    <div className="mb-3">
                        <input value={txt.title} name="title" onChange={inputevent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                    </div>
                    <div className="mb-3">
                        <textarea value={txt.desc} name="desc" onChange={inputevent} className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Note here....." rows="3"></textarea>
                        <button onClick={btnClick} className="notebtn btn btn-primary">+</button>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    btn.map((val, index)=>{
                        return<CardShow
                                key={index}
                                id={index}
                                title={val.title}
                                desc={val.desc}
                                onSelect={delCard}
                />
                    })
                }
                
                
            </div>
        </>
    )
}
export default NoteApp;