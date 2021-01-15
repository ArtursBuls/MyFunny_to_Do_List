import React, { useEffect, useState } from 'react';
import 'flexboxgrid';
import { v4 as uuidv4 } from 'uuid';
import { CardToDo } from './components/cardToDo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './ToDo.module.scss';

toast.configure()
function ToDoList() {

  const [inputText, setInputText] = useState('');
  const [toDoList, setToDoList] = useState<string[]>(
    ['Pamosties no rīta teicamā garastāvoklī!',
      'Ieēst brokastis un iedzert rīta kafiju!',
      'Codelex rulē, nosēdēt pie datora visu dienu. Izpildīt visus majas darbus!',
      'Kā man bieži gadās - nosēdēt visu dienu pie datora un tupīt kā traks.' +
      ' Rezultātā - nekas nav izdarīts. Waisted!'
    ]);
  const [textColors, setTextColors] = useState<string>('');
  useEffect(() => {
    function notify() {
      toast.info('Šaujam gaisā..🌟🌟🌟..Yohooo..!😎', { position: toast.POSITION.TOP_CENTER })
    }; notify();
  }, [])

  const addListHandler = () => {
    if (inputText) {
      const newList = [inputText, ...toDoList];
      setToDoList(newList);
      setInputText('');
    }
  }

  const deleteHandler = (index: number) => {
    const clonedList = [...toDoList];
    clonedList.splice(index, 1);
    setToDoList(clonedList);
  }

  useEffect(() => {
    const currAvtiveColor = textColors;
    if (currAvtiveColor === '') { setTextColors('green') }
    else if (currAvtiveColor === 'green') { setTextColors('blue') }
    else if (currAvtiveColor === 'blue') { setTextColors('yellow') }
    else if (currAvtiveColor === 'yellow') { setTextColors('red') }
    else { setTextColors('green') };

  }, [toDoList]);

  return (
    <section>
      <div className="row center-xs">
        <div className="col-xs-12">
          <h2 className={style.headmain}>
            To Doo... jahuuu....
          </h2>
          <h3
            className={style.christmas}
            style={{ color: textColors }}
          >
            Merry Christmas!
          </h3>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-12">
          <input
            type="text"
            value={inputText}
            className={style.input}
            placeholder="Please, write here..."
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            className={style.button}
            onClick={addListHandler}
          >
            Add
          </button>
        </div>
      </div>
      <br />
      <div className="row center-xs">
        <div className="col-xs-6">
          <div className={style.mainWrapper}>
            {toDoList.map((item, index) => (
              <div
                className={style.cardWrapper}
                key={uuidv4()}>
                <CardToDo
                  listItem={item}
                  deleteHandler={() => deleteHandler(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToDoList;
