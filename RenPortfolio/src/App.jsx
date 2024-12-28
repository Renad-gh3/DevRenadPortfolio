import "./index.css";
import Nav from "../src/components/navbar/nav";

const App = () => {
  return (
    <>
      {/* Container for everything */}
      <div>
        <div className="sticky top-0 z-10 bg-white shadow-md">
          <Nav />
        </div>

        {/* Sections */}
        <div className="grid grid-rows-auto gap-4 mt-16">
          {" "}
          <div className="bg-indigo-600 p-6">
            <p>Section 1 with some content</p>
          </div>
          <div className="bg-green-600 p-6">
            <p>Section 2 with more content</p>
          </div>
          <div className="bg-blue-600 p-6">
            <p>
              Section 3. This section might have more content, so the height
              increases accordingly.
            </p>
          </div>
          <div className="bg-yellow-600 p-6">
            <p>Section 4. Add as much content as needed here.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
