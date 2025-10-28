
describe('Expense App', ()=>{

it ('ios Testing ', async () =>{

  await $("~Webview").click();

  //1. get your multiple contexts with this code 
  await driver.waitUntil(async () =>{
      const contexts = await driver.getContexts();
      return contexts.length >1;
    }, {timeout: 30000,
        timeoutMsg: 'Sorry, its taking so long. Waiting for another context'});

   //2. Switch to webdrive context 

   const contexts = await driver.getContexts();
   await driver.switchContext(contexts[1])

   //3. Confirm webview context 
   const subtitleTxt = await $('.hero__subtitle');
   await expect(subtitleTxt).toHaveText('Next-gen browser and mobile automation test framework for Node.js');




    


    //console.log('App launched successfully')
  });//end of test case 






})//end of describe block 