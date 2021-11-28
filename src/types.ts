export type teacherUser = {
    id: string,
    name: string,
    email: string,
    password: string,
}

 
export type material = {
    id: string,
    title: string,
    description: string,
    url_link: string,
}

export type quizz = {
    id: string,
    question: string,
    correct: string,
    incorrect_1: string,
    incorrect_2: string,
    incorrect_3: string,
}