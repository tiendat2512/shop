import React from 'react'

export default function Overlay({onClickEvent}) {
    return (
        <>
            <div className="overlay" 
            style={{position: "fixed", 
            top: 0, left: 0, right: 0, 
            zIndex: '110',
            bottom: 0, 
            backgroundColor: '#0000008f'}} onClick={onClickEvent}></div> 
        </>
    )
}
