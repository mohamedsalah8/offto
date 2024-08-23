import Layer from "../Global/Layer";
import Card from "./Card";

export default function Contact() {
  return (
    <div>
      <Layer
        title="CONTACT US"
        subTitle="Its more than just trip"
        route="contact us"
        key={"contact"}
      />
      <Card />
    </div>
  );
}
