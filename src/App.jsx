//import FloatingLabelsForm from "./components/FloatingLabelsForm";
//import GeneralInputs from "./components/GeneralInputs";
import { FieldInputs, NumberInputs, SelectInputs, TextArea } from "./pages";

export default function App() {
  return (
    <>
      <div>
        <FieldInputs/>
        <SelectInputs/>
        <NumberInputs/>
        <TextArea/>
        {/* <FloatingLabelsForm/> */}
      </div>
    </>
  )
}