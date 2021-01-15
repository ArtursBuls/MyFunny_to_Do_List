import React, { FC } from 'react';
import style from './cardToDo.module.scss';

interface Props {
    listItem: string,
    deleteHandler: () => void
}

export const CardToDo: FC<Props> = ({ listItem, deleteHandler }) => {
    return (
        <div className={style.box}>
            <h1 className={style.list}>
                {listItem}
            </h1>
            <button
                className={style.button}
                onClick={deleteHandler}
            >
                Remove
            </button>
        </div>
    );
}
