import React from 'react';
import styled from 'styled-components';
import './BulletPoint.css';

const BulletPoint = props => {
    const formatText = text => {
        const parts = text.split(':');
        if (parts.length > 1) {
            return ( <
                >
                <span className="bold-text">{parts[0]}</span>: { parts.slice(1).join(':') } <
                />
            );
        }
        return text;
    };

    return (
        <div className="BulletPoint">
            <ul>
                <li>
                    <heading>{props.title}</heading>
                    <br></br>
                    <time>{props.time}</time>
                    <p>
                        {props.grade && (
                            <>
                                {formatText(props.grade)}
                                <br />
                            </>
                        )}
                        {props.track && (
                            <>
                                {formatText(props.track)}
                                <br />
                            </>
                        )}
                        {props.text && (
                            <>
                                {formatText(props.text)}
                                <br />
                            </>
                        )}
                        {props.supervisor && (
                            <>
                                {formatText(props.supervisor)}
                                <br />
                            </>
                        )}
                    </p>
                    <p><i>{props.place}</i></p>
                </li>
            </ul>
            <br></br>
        </div>
    );
};

export default BulletPoint;