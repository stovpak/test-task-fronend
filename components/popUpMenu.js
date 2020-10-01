import Popup from 'reactjs-popup';
import React from "react";
import UpdateOrCreateArticleForm from "./updateOrCreateArticleForm";

const PopUpMenu = props => {

    return (
        <div>
            <Popup trigger={<button> {props.buttonValue}</button>} position="right center">
                <UpdateOrCreateArticleForm id={props.id} content={props.content} title={props.title} imgId={props.imgId} type={props.type} articleIds={props.articleIds}/>
            </Popup>
        </div>
    );
};

export default PopUpMenu;
