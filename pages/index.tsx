import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { NextPage } from "next";

const HomePage: NextPage = () => {
    return (
        <>
            <Layout title="Listado de pokemon">
                <Button color="primary">Hello world</Button>
            </Layout>
        </>
    );
};

export default HomePage;
