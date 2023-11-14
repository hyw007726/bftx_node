// const formidable = require('formidable');

// var fileObj = {}

// app.post('/upload', (req, res) => {

//     const form = formidable({
//         // If the directory does not exist, the uploaded files are silently discarded.
//         keepExtensions: true,
//         // filename: (name, ext, part, form) => {
//         //     return part.originalFilename
//         // }
//     });

//     form.parse(req, (err, fields, files) => {
//         // console.log(fields)
//         //rename tempFolder after fields.date
//         let date = new Date(fields.date).toISOString().substring(0, 10)
//         let folderName = path.join(__dirname, 'uploads', date)

//         let newPath = path.join(folderName, files.file.originalFilename)
//         if (fileObj[fields.id] == undefined) {
//             fileObj[fields.id] = 1
//         } else {
//             fileObj[fields.id]++
//         }
//         fs.mkdir(folderName, () => {
//             fs.rename(files.file.filepath, newPath, (err) => {
//                 if (err) console.log(err)
//                 fileObj[path.extname(newPath).slice(1)] = newPath
//                 if (fileObj[fields.id] >= fields.fileCount) {
//                     let query = `insert into course (real_date, title, video_url,audio_url,irc_url, tips_img) values ('${new Date(fields.date).toJSON().slice(0, 10)}','${fields.title}','${fileObj['mp4']}','${fileObj['mp3']}','${fileObj['txt']}','${fileObj['png']}')`
//                     db.query(query, (err, result) => {
//                         console.log(err, result)
//                         fileObj = {}
//                     })
//                 } else {
//                     console.log(fileObj)
//                 }

//             })
//         })
//         // console.log(files.file.filepath, newPath)
//         // let newFilePath = path.join(newPath, files.file.newFilename)

//         res.send(JSON.stringify(newPath));
//     })
//     // form.once('end', () => {
//     //     console.log('Done!');
//     // });
//     // form.on('file', (name, file) => {
//     //     console.log(name + " = ", file);
//     // });
//     // console.log(req.headers)
//     // let arr = [];
//     // req.on('data', data => {
//     //     arr.push(data);
//     // });
//     // req.on('end', () => {
//     //     let data = Buffer.concat(arr);
//     //     // fs.writeFile('input.txt', data, () => { })
//     // })
// })