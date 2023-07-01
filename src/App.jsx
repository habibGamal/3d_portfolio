import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Contact, Experience, Feedbacks, Tech, Works, StarsCanvas } from "./components";
function App() {
    return (
        <BrowserRouter>
            <div className="bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Works />
                <Experience />
                {/* <Tech /> */}
                <Feedbacks />
                <div className="relative z-0 ">
                    <StarsCanvas />
                    <Contact />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
