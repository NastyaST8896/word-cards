import { type ChangeEventHandler, type FormEventHandler, useEffect, useRef, useState } from 'react';
import { Button } from '@lib/components/button';
import { Input } from '@lib/components/input';

import './form.scss';


type InputProps = {
    create: (word: string, translate: string) => void;
};

export const Form = ({ create }: InputProps) => {
    const [wordValue, setWordValue] = useState('');
    const [translateValue, setTranslateValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const trimmedWordValue = wordValue.trim();
        const trimmedTranslateValue = translateValue.trim();

        if (trimmedWordValue !== '' && trimmedTranslateValue !== '') {
            create(trimmedWordValue, trimmedTranslateValue);
        }

        setWordValue('');
        setTranslateValue('');
    };

    const handleWordInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setWordValue(event.currentTarget.value);
    };

    const handleTranslateInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setTranslateValue(event.currentTarget.value);
    };

    return (
        <form className="form" onSubmit={ handleSubmit }>
            <div className="form-cards">
                <div className="form-div">
                    <Input
                        fullWidth="true"
                        onChange={ handleWordInputChange }
                        placeholder="Введите слово (англ.)"
                        ref={ inputRef }
                        shadowType="inset"
                        value={ wordValue }
                    />
                </div>

                <div className="form-div">
                    <Input
                        fullWidth="true"
                        onChange={ handleTranslateInputChange }
                        placeholder="Введите перевод (рус.)"
                        shadowType="inset"
                        value={ translateValue }
                    />
                </div>
            </div>

            <Button>Добавить</Button>
        </form>
    );
};
