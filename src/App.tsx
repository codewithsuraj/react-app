import "./App.css";
import ExpandableText from "./components/ExpandableText/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxChars={100}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita dolor
        dolorem illo esse corporis minima explicabo nulla sit saepe ex iure
        libero eligendi corrupti molestiae culpa in pariatur facilis fuga ipsam
        voluptate laboriosam, illum possimus dignissimos doloremque?
        Accusantium, voluptates quidem veniam odit qui harum nihil fugit omnis
        magni sint explicabo molestiae facilis illo, vero iure rerum ea.
        Reiciendis amet officia rem. Voluptate id animi sit sapiente rem
        repellendus quod nostrum vitae dolore ea voluptates doloremque ex
        consequuntur dignissimos repudiandae, delectus facilis modi, ipsum
        quibusdam magnam provident blanditiis culpa quos! Itaque id vel libero
        odio reprehenderit. Similique reiciendis molestiae velit laboriosam!
      </ExpandableText>
    </div>
  );
}

export default App;
