import { Route, Routes } from "react-router-dom";
import axios from "./axiosConfig";
import NewQuestion from "./pages/Questions/NewQuestion.jsx";
import AllQuestions from "./pages/AllQuestions/AllQuestions.jsx";
export const AppState = createContext();

function App() {
 
  return (
    <AppState.Provider value={{ user, setuser, headerToken }}>
     
      <Routes>
        <Route path="/question" element={<NewQuestion />} />
        <Route path="/all-questions" element={<AllQuestions />} />
       
      </Routes>

      <Footer />
    </AppState.Provider>
  );
}

export default App;
