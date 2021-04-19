const storge = browser.storage.local;

const runModules = async () => {

   const { focus } = await storge.get('focus');
   const { time } = await storge.get('time');
   const { search } = await storge.get('search');
   

   if(focus) {
   
      const script = document.createElement('script');
      script.src = browser.runtime.getURL('modules/focus.js');
      document.head.appendChild(script);
   
   } else if(document.location.href.includes('LoadTestStart.html')) {

      setTimeout(() => {
         document.querySelector('.mdc-button__label').innerHTML = "ROZPOCZNIJ TEST Z WYKRYWANIEM WYJŚCIA ZE STRONY";
         document.querySelector('#start-form-submit').style.backgroundColor = "#ba0000";
      }, 1 * 1000);
      
   };

   if(time) {

      const script = document.createElement('script');
      script.src = browser.runtime.getURL('modules/timer.js');
      document.head.appendChild(script);
   
   };

   if(search) {

      const script = document.createElement('script');
      script.src = browser.runtime.getURL('modules/search.js');
      document.head.appendChild(script);

   };
   
};

try {
   runModules();
} catch(e) {
   alert(e);
};
