import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import i18n configuration
import { BsTranslate } from "react-icons/bs";


function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="fixed bottom-1/4 z-50  hover:right-0 transition-all duration-1000 -right-36">
            <div className='flex gap-2 items-center py-1 pl-3  bg-blue-950 dark:bg-gray-400 rounded-l-full px-2 text-white dark:text-gray-900'>
                <p><BsTranslate /></p>
                <button className='hover:underline' onClick={() => changeLanguage('en')}>English</button>
                <button className='hover:underline' onClick={() => changeLanguage('hi')}>हिंदी</button>
                <button className='hover:underline' onClick={() => changeLanguage('bn')}>বাংলা</button>
            </div>
        </div>
    );
}

export default App;
