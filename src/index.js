import "./styles/index.scss";

/*
check if [HMR] is active
*/
if (module.hot) {
  const nowTime = new Date();
  console.log(`%c[HMR] updated at ${nowTime.getHours()}:${nowTime.getMinutes()}:${nowTime.getSeconds()}`, 'background: #2ecc71; color: #fff');

  /*
   jquery added to project
   use $ flag everywhere you want using jquery
  */
  $(document).ready(() => {


    // write your scripts here
    $('body').text('Hello Word');


  });

} else {
  console.log('%cError occurred - [HMR] not active', 'background: #ff4444; color: #fff')
}