import * as React from "react";
import { useState } from "react";
import Layout from "../components/Layout";
import BlackFridaySection from "../components/BlackFridaySection";

const AboutPage = () => {
    const [open, setOpen] = useState(false);

    return (
        <Layout>
            <BlackFridaySection onOpen={() => setOpen(true)} />

            {open && (
                <div>
                    {/* your popup goes here */}
                    POPUP OPENED
                </div>
            )}
        </Layout>
    );
};

export default AboutPage;
