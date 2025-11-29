import type { ChangeEventHandler, Ref } from 'react';
import cn from 'classnames';

import styles from './input-styles.module.scss';

type InputProps = {
    className?: string;
    label?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    ref?: Ref<HTMLInputElement>;
    shadowType?: 'simple' | 'inset';
    value: string;
    type?: 'text' | 'email' | 'password';
    fullWidth?: 'true';
};

export const Input = (props: InputProps) => {
    const { className, label, onChange, placeholder, ref, shadowType, type = 'text', value, fullWidth } = props;

    const inputClx = cn(
        styles['form-input'],
        className,
        {
            [styles['simple-shadow']]: shadowType === 'simple',
            [styles['inset-shadow']]: shadowType === 'inset',
        }
    );

    const inputDivClx = cn(
        styles.input,
        {
            [styles['input-fWidth']]: fullWidth === 'true',
        },
    );

    const inputProps = {
        autoComplete: 'off',
        className: inputClx,
        onChange,
        placeholder,
        ref,
        type,
        value,
    };

    return (
        <div className={ inputDivClx }>
            { label
                ? (
                    <label>
                        <span className={ styles.label }>{ label }</span>

                        <input { ...inputProps } />
                    </label>
                )
                : <input { ...inputProps } />
            }
        </div>
    );
};

