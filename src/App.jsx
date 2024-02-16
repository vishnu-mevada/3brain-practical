import { Header, Footer } from "./components/index";
import {
    Service,
    Portfolio,
    About,
    Team,
    Contact,
    Client,
} from "./pages/index";

function App() {
    return (
        <div id="page-top">
            <Header />
            <Service />
            <Portfolio />
            <About />
            <Team />
            <Client />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
