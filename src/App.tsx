import { Routes, Route } from "react-router-dom";
import "./globals.css";
import siginForm from "./_auth/forms/siginForm";
import signupForm from "./_auth/forms/signupForm";
import { Home } from "./_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/*public routes*/}
        <Route element = {<AuthLayout />}>
          {/* <Route path = "/sign-in" element= {<siginForm />} />
          <Route path = "/sign-up" element= {<signupForm />} /> */}
          <Route path  = "/sign-in" element = {<siginForm/>}/>
          <Route path  = "/sign-up" element = {<signupForm/>} />
        </Route>

        {/*private routes*/}
        <Route element = {<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
