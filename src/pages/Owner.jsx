import React from "react";
import myImage from "../assets/31-Thanawat-Art.jpg";

export default function Owner() {
    return (
        <section className="max-w-[804px] mx-auto text-center ">
            <h1 className="mb-11 text-[2rem] font-bold">Art - Group G - 31</h1>
            <div className="block max-w-[270px] mx-auto mb-8">
                <img className="w-full object-cover" src={myImage} alt="31_Thanawat_Art" />
            </div>
            <h2 className="mb-4 font-semibold">Short Biography:</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, pariatur! Quod iste dolorum, dicta nam et asperiores quaerat hic. Officiis, dicta porro saepe in error recusandae omnis numquam perspiciatis, animi impedit mollitia itaque
                nobis consequuntur fugit fugiat expedita! Praesentium maxime ratione magni inventore deleniti ab sunt ea distinctio iure incidunt!
            </p>
        </section>
    );
}
