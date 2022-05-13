import React from 'react'
import Message from "./Message";
import s from './Message.module.css';

interface MessageDataInterface {
    avatar: string,
    name: string,
    message: string,
    time: string
}

const messageData: MessageDataInterface = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'Some text',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            {/* eslint-disable-next-line react/jsx-no-undef */}
            <div className={s.hw1}>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
