require('dotenv').config();

const express = require('express');
const cors = require('cors')
const db = require('./config/db');
const path = require('path');
const fs = require('fs')
const courseRoutes = require('./routes/courseRoutes');

const app = express();
app.use(cors())
app.use(express.json());
app.use('/', express.static('public'))

app.use('/course', courseRoutes);
//test
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  app.listen(process.env.NODE_ENV === 'test' ? 3001 : 3000, () => {
    console.log('App listening on port 3000!')
  });
  module.exports = app;

//4、设置端口
// app.listen(process.env.NODE_ENV === 'test' ? 3001 : 3000, () => {
//     console.log('App listening on port 3000!')//服务器启动后会打印这句话
//     // let date = new Date().toISOString()
//     // console.log(new Date('2022-06-05T16:04:34.637Z').toISOString().substr(0, 10))
//     // db.query('desc course', (err, result) => {
//     //     if (err) {
//     //     console.error('Error executing query:', err);
//     //     return;
//     // }
//     //     console.log(result)
//     // })
//     // db.query('select * from course where id=1058', (err, result) => {
//     //     console.log(result)
//     // })

//     //add a course
//     // db.query('insert into course (title, real_date) values ("Test2", curdate())', (err, result) => {
//     //     console.log(err, result)
//     // })
//     //add a column
//     // db.query('alter table course add real_date date', (err, result) => {
//     //     console.log(result)
//     // })

//     //delete a course and its foreign key
//     // db.query('delete from course_log where course_id=', (err, result) => {
//     //     console.log(err, result)
//     // })
//     // db.query('delete from course where id=', (err, result) => {
//     //     console.log(err, result)
//     // })

//     db.query('show tables', (err, result) => {
//         console.log(result)
//         var tableHeaders = {}
//         result.forEach((item) => {
//             let table = item["Tables_in_bat_listen_write"]
//             // db.query('describe ' + table, (err, result) => {
//             //     if (result) {
//             //         let arr = []
//             //         result.forEach((item) => {
//             //             arr.push(item.Field)
//             //         })
//             //         // console.log(table, arr)
//             //         tableHeaders[table] = arr
//             //     }
//             // })

//             //test on postman
//             // app.get('/' + table,function (req, res) {
//             //     res.send(table)
//             // })

//             app.get('/' + table, function (req, res) {
//                 res.setHeader("Access-Control-Allow-Origin", "*");
//                 // for (var r in req) {
//                 //     console.log(r)
//                 // }
//                 // console.log(req.query)
//                 switch (req.query.action - 0) {
//                     case 0:
//                         //search
//                         // console.log('select * from ' + table + ' limit ' + req.query.limit + ' offset ' + req.query.offset)
//                         let data = []
//                         db.query('select * from ' + table + ' order by ' + req.query.orderby + ' ' + req.query.order + ' limit ' + req.query.limit + ' offset ' + req.query.offset, (err, result) => {
//                             if (err) return console.log(err)
//                             result.forEach((item) => {
//                                 data.push(item)
//                             })
//                             res.send(JSON.stringify(data))
//                             // console.log(data)
//                         })
//                         break;
//                     case 1:
//                         //find with id
//                         // console.log('select * from ' + table + ' where id=' + req.query.id)
//                         db.query('select * from ' + table + ' where id=' + req.query.id, (err, result) => {
//                             if (err) return console.log(err)
//                             console.log(result)
//                             res.send(JSON.stringify(result))
//                         })
//                         break;
//                     case 2:
//                         //update with id
//                         console.log('update ' + table + ' set ' + req.query.field + '=' + req.query.value + ' where id=' + req.query.id)
//                         db.query('update ' + table + ' set ' + req.query.field + '="' + req.query.value + '" where id=' + req.query.id, (err, result) => {
//                             console.log(result)
//                             res.send(JSON.stringify(result))
//                         })
//                         break;
//                     case 3:
//                         //addVideo

//                         break;
//                 }




//             });
//         })
//     })
// })