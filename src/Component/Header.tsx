import React from "react";

type HeaderProps = {
    username: string;
};
const Header = ({username}: HeaderProps) => {
    return (
        <header className="grid grid-cols-3 items-center bg-white text-black  px-6 py-4 shadow">
            <h2 className="font-bold text-6xl">Dashboard</h2>
            <div className="flex flex-col justify-center items-center gap-3">
                <img
                    src="assets/images/face-vegeta.png"
                    alt="avt"
                    className="rounded-full hover:sacle-110 bg-blue-300 w-[200px] h-[200px] object-cover border-black border-2 "
                />
                <span className="font-bold text-3xl">{username}</span>
            </div>
        </header>

    );
};
export default Header;