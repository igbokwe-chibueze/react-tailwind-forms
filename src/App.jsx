//import FloatingLabelsForm from "./components/FloatingLabelsForm";
//import GeneralInputs from "./components/GeneralInputs";
import { FieldInputs, NumberInputs, SelectInputs } from "./pages";

export default function App() {
  return (
    <>
      <div>
        <FieldInputs/>
        <SelectInputs/>
        <NumberInputs/>
        {/* <GeneralInputs/> */}
        {/* <FloatingLabelsForm/> */}
      </div>
    </>
  )
}