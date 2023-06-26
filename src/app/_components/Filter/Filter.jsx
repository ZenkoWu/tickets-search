import s from './Filter.module.css'
import { useGetCinemasQuery } from '../../redux/services/cinemaApi';
import genresRu from '../../genresRu';
import { InputField } from './TextField/TextField';
import { SelectField } from './SelectField/SelectField';
import { useCallback } from 'react';


const input = {
    title: 'Название', 
    placeholder: 'Введите название', 
    isSelect: false,
}

const nameChangeAC = (payload) => ({type: 'setMovieName', payload})
const cinemaChangeAC = (payload) => ({type: 'setCinema', payload})
const genreChangeAC = (payload) => ({type: 'setGenre', payload})

const Filter = ({dispatch, state}) => {
    const {data} = useGetCinemasQuery('')

    const onChange = useCallback(actionCreator => 
        (payload) => dispatch(actionCreator(payload)), 
    [])

    let options = [{id: 'Не выбран', name: 'Не выбран'}];

    if(data) {
        options.push(...data?.map((el) => ({id: el.id, name: el.name})))
    }
    const selects = [
        {
            title: 'Жанр', 
            placeholder: 'Выберите жанр',
            options: ['Не выбран', ...Object.values(genresRu)]?.map((el) => ({id: el, name: el})),
            value: state.genre,
            setValue: onChange(genreChangeAC),
            zIndex: 5
        },
        {
            title: 'Кинотеатр', 
            placeholder: 'Выберите кинотеатр', 
            options: options,
            value: state.cinema,
            setValue: onChange(cinemaChangeAC),
            zIndex: 3
        },
    ]

    return (
        <div className={`${s.filter} backgroundTemplate`}>
            <p className='fs20 fw-600 pb-16'>Фильтр поиска</p>

            <div>
                <InputField
                    value={state.name}
                    setValue={onChange(nameChangeAC)}
                    key={input.title}
                    placeholder={input.placeholder}
                    title={input.title}
                />

                {
                    selects.map((el) => 
                        <SelectField
                            value={el.value}
                            setValue={el.setValue}
                            key={el.title}
                            title={el.title}
                            placeholder={el.placeholder}
                            options={el.options}
                            zIndex={el.zIndex}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Filter;


