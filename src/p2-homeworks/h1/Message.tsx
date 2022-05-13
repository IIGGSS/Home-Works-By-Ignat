import React from 'react'
import s from './Message.module.css';

interface MessagePropsInterface{
    avatar:string,
    name:string,
    message:string,
    time:string
}

function Message(props:MessagePropsInterface) {
    return (
        <div className={s.message}>
            <div className={s.message__img}>
                <img  src={props.avatar} alt=""/>
            </div>
            <div className={s.message__body}>
                <div className={s.message__name}>
                    {props.name}
                </div>
                <div className={s.message__cont}>
                    <div className={s.message__text}>
                        {props.message}
                    </div>
                    <div className={s.message__time}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
