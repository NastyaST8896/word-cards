import type { PropsWithChildren } from 'react';

import styles from './button-styles.module.scss';

type ButtonProps = {
    className?: string;
};

export const Button = (props: PropsWithChildren<ButtonProps>) => {
    return (
        <button className={ styles.button }>{ props.children }</button>
    );
};