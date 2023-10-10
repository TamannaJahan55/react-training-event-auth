import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import VocationalCard from "./VocationalCard";


const VocationalDetails = () => {
    const vocationalWorks = useLoaderData();
    console.log(vocationalWorks);
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-rose-50">
                <div className="mx-10 my-20">
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            vocationalWorks.map(works => <VocationalCard key={works.id} works={works}></VocationalCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VocationalDetails;