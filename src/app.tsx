import { useState } from 'react';

import { Form } from './components/form';

type WordTranslate = {
    id: number,
    word: string,
    translation: string,
};

export const App = () => {
    const [WordBank, setWordBank] = useState<WordTranslate[]>([]);

    const addWord = (trimmedWordValue: string, trimmedTranslateValue: string) => {
        const word: WordTranslate = {
            id: Date.now(),
            word: trimmedWordValue,
            translation: trimmedTranslateValue,
        };

        setWordBank((prevWordBank) => ([...prevWordBank, word]));
        console.log(WordBank);
    };

    return <Form create={ addWord } />;
};
