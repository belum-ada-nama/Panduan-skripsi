import FeedbackForm from "../components/FeedbackForm"




function UpdateForm() {
   const handleSubmit = (data: { name: string; email: string; message: string }) => {
    console.log('Data form yang dikirim:', data); 
  };

  return (
    <div><FeedbackForm onSubmit={handleSubmit}/></div>
  );
}

export default UpdateForm