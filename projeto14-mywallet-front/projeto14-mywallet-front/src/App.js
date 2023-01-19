import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import CheckInPage from './pages/CheckInPage/CheckInPage';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/nova-entrada" element={<CheckInPage />} />
                <Route path="/nova-saida" element={<CheckOutPage />} />
            </Routes>
        </BrowserRouter>
    )
}