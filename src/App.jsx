//import FloatingLabelsForm from "./components/FloatingLabelsForm";
//import GeneralInputs from "./components/GeneralInputs";
import { FieldInputs, Forms, NumberInputs, SelectInputs, TextArea } from "./pages";

export default function App() {
  return (
    <>
      <div>
        <FieldInputs/>
        <SelectInputs/>
        <NumberInputs/>
        <TextArea/>
        <Forms/>
        {/* <FloatingLabelsForm/> */}
      </div>
    </>
  )
}