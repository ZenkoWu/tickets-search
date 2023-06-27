import { OneQuestion } from "./OneQuestion/OneQuestion"

const questionsAnswers = [
    {
        question: 'Что такое Билетопоиск?',
        answer: `Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, 
        купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, 
        написать рецензии и дополнить описание фильмов.`
    },
    {
        question: 'Какой компании принадлежит Билетопоиск?',
        answer: 'В 2013 году владельцем Билетопоиска стал Яндекс.'
    },
    {
        question: 'Как купить билет на Билетопоиск?',
        answer: 'Выберите понравившиеся фильмы и добавьте их в корзину, а затем оплатите итоговую стоимость'
    },
    {
        question: 'Как оставить отзыв на Билетопоиск?',
        answer: 'Напишите в поддержку :)'
    },
]

const FAQ = () => {
    return (
        <>  
            <div className={`backgroundTemplate`}>
                <div className='d-flex justify-content-between'>
                    <h1>Вопросы-ответы</h1>
                </div>
            </div>
           {
                questionsAnswers.map(q => 
                    <OneQuestion
                        key={q.question}
                        question={q.question} 
                        answer={q.answer}
                    />
                )
           } 
        </>
    )
}

export default FAQ;

