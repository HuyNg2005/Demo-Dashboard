import React from 'react';

type CardProps = {
    title: string;
    value: string | number;
    icon?: React.ReactNode;
};
const Card:React.FC<CardProps> = ({title, value,icon})=>{
    return (
        <div className="border-2 border-amber-400 bg-white text-black p-6 rounded-2xl shadow flex items-center gap-4">
            {icon && <div className="text-3xl">{icon}</div>}
            <div>
                <p className="text-gray-500"> {title}</p>
                <h3 className="font-bold text-xl">{value}</h3>
            </div>
        </div>
    );
};
export default Card;