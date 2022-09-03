import React from "react";
import Layout from "../Components/Layout";
import Carousel from "../Components/Carousel";
import { Link } from "@inertiajs/inertia-react";

const indexImages = [
    "/storage/images/horsethumb3.jpg",
    "/storage/images/coaster5.jpg",
    "/storage/images/aggravation.jpg",
    "/storage/images/shotpaddle.jpg",
    "/storage/images/phoneholder2.jpg",
    "/storage/images/cuttingboard1.jpg",
    "/storage/images/mantle2.jpg",
    "/storage/images/barndoor1.jpg",

];

export default function Home() {

    return (
        <Layout>
            <div className="index-matter">
                <Carousel images={indexImages} />
                <div className="index-text">
                    <h2>Handmade with heart in the Pacific Northwest</h2>
                    <p>Some text here for the time being</p>
                    <div className="browse-links">
                        <Link href="/categories/toysandgames">Browse toys and games</Link>
                        <Link href="/categories/homeandoffice">Browse home and office</Link>
                        <Link href="/categories/furnishings">Browse furnishings</Link>
                        <Link href="/categories/custom">Get a quote on a custom project</Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}