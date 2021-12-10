const storge = browser.storage.local;

const runModules = async () => {

   const { focus } = await storge.get('focus');
   const { time } = await storge.get('time');
   const { search } = await storge.get('search');


   if(focus) {

      const script = document.createElement('script');
      script.src = browser.runtime.getURL('modules/focus.js');
      document.head.appendChild(script);

   } else if(document.location.href.includes('/exam/LoadTestStart.html') || document.location.href.endsWith(".testportal.pl/")) {

      const startBox = document.querySelector(".button_box");
      const button = document.querySelector('.mdc-button');

      if(!startBox || !button) return;

      const statusInformation = document.createElement('span');
      statusInformation.textContent = "Wyłączony antitestportal";

      statusInformation.style = `
         margin-left: 10px;
         display: flex;
         justify-content: center;
         align-items: center;
         color: gray;
      `;

      startBox.appendChild(statusInformation);
      button.style.backgroundColor = "rgba(198,0,0,0.81)";

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
