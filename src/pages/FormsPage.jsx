import { Checkbox, FieldInputs, Forms, NumberInputs, SelectInputs, TextArea } from "../sections"


const FormsPage = () => {
  return (
    <section className=" mt-10 ">
      <FieldInputs/>
      <SelectInputs/>
      <NumberInputs/>
      <TextArea/>
      <Checkbox/>
      <Forms/>
    </section>
  )
}

export default FormsPage