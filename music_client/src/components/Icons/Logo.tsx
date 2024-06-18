import React from "react";

type Props = { isFull: boolean };

const Logo = (props: Props) => {
    return (
        <svg
            id="logo-26"
            className="h-full"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.3078 32.6547L8.05536 27.0213L12.8285 18.7767L15.8616 24.0306L33.7668 24.021L28.6861 32.7325L11.3078 32.6547Z"
                fill="#FFAD64"
            ></path>
            <path
                d="M36.9641 18.4272L33.7117 24.0605L24.1851 24.0493L27.2185 18.7955L18.2576 3.29395L28.3423 3.3382L36.9641 18.4272Z"
                fill="#ADD4D3"
            ></path>
            <path
                d="M11.8091 3.26395H18.314L23.0675 11.52L17.0008 11.5197L8.05663 27.0309L3.05255 18.2752L11.8091 3.26395Z"
                fill="#FB8351"
            ></path>

         
        </svg>
    );
};

export default Logo;
