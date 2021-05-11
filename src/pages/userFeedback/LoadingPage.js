import PageHeader from "../../components/PageHeader";

function LoadingPage() {
    return (
        <>
            <PageHeader title="loading..."/>
            <div className="pageContainer">
                <div className="pageContent">
                    <p>Uw aanvraag word verwerkt</p>
                </div>
            </div>
        </>
    )
}

export default LoadingPage;