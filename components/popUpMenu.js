import Popup from 'reactjs-popup';
import React from "react";
import ArticleForm from "./articleForm";

const PopUpMenu = props => {

    return (
        <div className='pop-up-menu'>
            <Popup trigger={<button> {props.buttonValue}</button>} position="right center">
                <ArticleForm id={props.id} content={props.content} title={props.title} imgId={props.imgId} type={props.type} articleIds={props.articleIds}/>
            </Popup>
        </div>
    );
};

export default PopUpMenu;
