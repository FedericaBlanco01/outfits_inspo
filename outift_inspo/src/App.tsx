import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { tw } from "./tw";
import HomePage from "./components/home";
import UploadLookPage from "./components/uploadLook";
import CreateLookPage from "./components/combine";

function App() {
  const queryClient = new QueryClient();
  const location = useLocation();
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="bg-white w-86 min-h-screen font-sans">
        <nav>
          <div className="flex justify-center bg-white p-5 text-gray-800 font-medium text-md items-center shadow-md">
            <div className="grid grid-rows-2 grid-flow-row gap-6 mt-4">
              <Link to="/" className="flex justify-center items-center text-xl">
                OUTFITTER
                <img src="/heart.png" className="h-8 w-8 ml-2" />
              </Link>
              <div className="flex justify-between text-gray-500">
                <Link to="/" className={tw( 
                  "flex justify-center align-center mx-4",
                  location.pathname === "/" && "text-red-700",
                )}>
                  EXPLORE
                </Link>
                <Link to="/upload/look" className={tw( 
                  "flex justify-center align-center mr-4",
                  location.pathname === "/upload/look" && "text-red-700",
                )}>
                  UPLOAD
                </Link>
                <Link to="/create/look" className={tw( 
                  "flex justify-center align-center mr-4",
                  location.pathname === "/create/look" && "text-red-700",
                )}>
                  MIX & MATCH
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload/look" element={<UploadLookPage />}/>
          <Route path="/create/look" element={<CreateLookPage />}/>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
