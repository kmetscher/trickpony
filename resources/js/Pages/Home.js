import React from "react";
import Layout from "../Components/Layout";
import Carousel from "../Components/Carousel";

const testImages = [
    "/storage/images/lenna.png",
    "/storage/images/house.png",
    "/storage/images/bell.png",
    "/storage/images/peppers.png",
    "/storage/images/tree.png"
];

export default function Home() {

    return (
        <Layout>
            <div className="index-matter">
                <Carousel images={testImages} />
                <div className="index-text">
                    <h2>Handmade with heart in the Pacific Northwest</h2>
                </div>
            </div>
        </Layout>
    );
}