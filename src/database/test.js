//chamados
const Database = require('./db')
const createProffy = require('./createProffy')

Database.then( async (db) => {
    //inserir dados
    proffyValue = {
        name: "Nicoly Felipe", 
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQGV7JTr0oLLgg/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=snTmCXzSdgV5lOEZ1O1Psyz39g8zoXINj33pbQXwV6g", 
        whatsapp:"49 95434898",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: 1, 
        cost: "20,00" 
        //proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após ser cadastrado
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
       
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //chamar função
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    //consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //consultar as classes de um proffy e trazer seus dados
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //consultar horarios disponíveis
    //o horario do time_from precisa ser menor ou igual ao horario solicitado
    //o horario solicitado deve ser menor que o time_to 
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1400"
    `)

    //console.log(selectClassesSchedules)
})