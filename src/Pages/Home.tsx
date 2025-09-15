import React from "react";
import Card from "../Component/Card";
import { User, Heart, Palette, BookOpen } from "lucide-react";

const Home: React.FC = () => {
    return (
        <div>
            <div className=" p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card title="Tên" value="Nguyễn Nhựt Huy" icon={<User />} />
                <Card title="Sở thích" value="Đá bóng" icon={<Heart />} />
                <Card title="Gu màu sắc" value="Basic, tối giản" icon={<Palette />} />
                <Card title="Ngành học" value="Lập trình Web" icon={<BookOpen />} />
            </div>
        </div>
    );
};
export default Home;
