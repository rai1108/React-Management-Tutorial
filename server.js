const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ etended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id': 1,
        'image': 'https://placeimg.com/64/64/any',
        'name': '홍길동',
        'birthday': '961222',
        'gender': '남자',
        'job': '대학생'
        },
        {
          'id': 2,
          'image': 'https://placeimg.com/64/64/any2',
          'name': '김경훈',
          'birthday': '901118',
          'gender': '남자',
          'job': '회사원'
          }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));