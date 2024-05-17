import Header from "./Header"
import Sidebar from "./Sidebar"
import { useLocation } from 'react-router-dom';
import { useAuthContext } from "@/providers/AuthProvider";

import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
    const pathname = useLocation().pathname;
    const isAuth = pathname.includes('auth');
    const { isLoggedIn } = useAuthContext();

    return (
        <>
            {!isAuth && isLoggedIn && <Sidebar />}
            <div className={`ml-auto max-w-[100rem] 2xl:ml-72 w-full ${isAuth ? 'sm:w-full' : 'sm:w-[calc(100%-280px)]'} `}>
                {!isAuth && isLoggedIn && <Header />}
                <main className="mt-[88px]">
                    {children}
                </main>
            </div>
        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout