const sequelize = require('./config/yandex');
const Character = require('./models/character');
const axios = require('axios');

let pushData = async () => {
    try {
        let alldata = await Character.findAll();
        if (alldata.length > 0) {
            await Character.destroy({ truncate: true });
            console.log('Table cleared');
        }

        let allChars = [];
        let data = await axios.get('https://rickandmortyapi.com/api/character/');

        let pages = data.data.info.pages;

        for (let i = 1; i <= pages; i++) {
            let response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`);
            let charList = response.data.results;
            allChars.push(...charList);
        }

        await Character.bulkCreate(allChars);
        console.log('Saved successfully!');

    } catch (error) {
        console.log(error);
    }
}

sequelize.sync()
    .then(() => {
        console.log('DB connected!');
        pushData();
    }).catch((err) => {
        console.log(error);
    });


