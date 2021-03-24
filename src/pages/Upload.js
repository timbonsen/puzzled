import { useForm } from "react-hook-form";

function UploadPage() {
    const { handleSubmit, errors, register, watch } = useForm();

    function onFormSubmit(data) {
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)}>

            </form>
        </>
    )
}

export default UploadPage;