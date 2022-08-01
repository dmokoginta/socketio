
const socket = io('http://localhost:3000')

socket.on('TAWAN_PURI', data=>{
  console.log('on message')
  console.log(data)
});
