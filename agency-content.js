const JostensTimer = setTimeout(JostensFunc, 2000);

function JostensFunc() {
  let planid = document.getElementsByClassName("jostensdem")?.[0];
  if (planid) {
    URLinterval = setInterval(checkPage, 100); // Set an interval to call checkPage every 100ms, variable name does not matter
    let x = document.querySelector('[title="Add School Contact"]'); // If this particular element exists
    if (x) {
      x.style.display = "none"; // Make it invisible
    }
  }
}

function checkPage() {
  let url = window.location.href; // Get the current URL
  // Extract the page and detail from the URL
  let page = url.split("/")[6];
  let detail = url.split("/")[7];
  // Call the appropriate function based on the detail
  if (detail === "smart_list") {
    ContactsFunc();
  } else if (detail === "detail") {
    DetailFunc();
  }
  // Call the SettingsFunc if the page is "settings"
  if (page === "settings") {
    SettingsFunc();
  }
}

function DetailFunc() {
  let detailsLoadedElement = document.getElementsByClassName("detailsloaded")[0]; // Get the first element with class "detailsloaded"

  if (!detailsLoadedElement) { // If the element is not found
    let companyNameElement = document.getElementsByName("contact.company_name")[0]; // Get the first element with name "contact.company_name"

    if (!companyNameElement) { // If the element is not found
      let generalInfoElement = document.querySelector('[protected_name="general_info"]'); // Get the element with protected_name "general_info"

      if (generalInfoElement) { // If the element is found
        generalInfoElement.firstChild.click(); // Click on the first child of the element
      }
    } else {
      let companyNameValue = companyNameElement.value; // Get the value of the company name element

      if (companyNameValue === "School Contact") { // If the company name is "School Contact"
        document.querySelector('[protected_name="contact"]').style.display = "none"; // Hide the contact element
        document.querySelector('[protected_name="general_info"]').style.display = "none"; // Hide the general info element
        document.querySelector('[protected_name="additional_info"]').style.display = "none"; // Hide the additional info element
        document.querySelector('[data-id="button_1701800376469"]').addEventListener("click", viewFunc); // Add click event listener to the button

        let managerLink = document.querySelector('[data-id="button_1708538695853"]').getAttribute("link"); // Get the link attribute of the button
        let schoolName = document.getElementsByName("contact.school_name")[0].value; // Get the value of the school name element
        let schoolCode = encodeURIComponent(schoolName); // Encode the school name
        let link = managerLink.replace("SCHOOL_NAME", schoolCode); // Replace "SCHOOL_NAME" in the link with the encoded school name

        document.querySelector('[data-id="button_1708538695853"]').setAttribute("link", link); // Set the link attribute of the button

        let schoolNameElement = document.getElementsByName("contact.school_name")[0]; // Get the first element with name "contact.school_name"

        if (!schoolNameElement) { // If the element is not found
          document.querySelector('[protected_name="school_info"]').firstChild.click(); // Click on the first child of the school info element
          window.ShortURL = document.getElementsByName("contact.short_url")[0].value; // Set the ShortURL property of the window object
        }

        window.ShortURL = document.getElementsByName("contact.short_url")[0].value; // Set the ShortURL property of the window object
        document.querySelector('[protected_name="school_info"]').className += " detailsloaded"; // Add "detailsloaded" to the class name of the school info element
      } else {
        document.getElementById("toolbar-contact-buttons").style.display = "block"; // Show the contact buttons toolbar
        document.querySelector('[protected_name="school_info"]').className += " detailsloaded"; // Add "detailsloaded" to the class name of the school info element
      }
    }
  }
}

function viewFunc() {
  let link = "https://" + ShortURL;
  window.open(link);
}

function ContactsFunc() {
  let x = document.getElementsByClassName("contactsloaded")[0]; // Get the first element with class "contactsloaded"
  if (!x) { // If x is undefined or null
    let btn = document.getElementsByClassName("btn btn-light btn-sm")[2]; // Get the third button
    btn.addEventListener("click", myIntFunc1);
    btn.addEventListener("click", myIntFunc2);
    document.getElementsByClassName("btn btn-light btn-sm")[0].className += " contactsloaded"; // Add "contactsloaded" to the class name of the first button
    AddSchoolFunc();
    PasteBtnFunc();
    CopyBtnFunc();
  }
}

function myIntFunc1() {
  const myInterval1 = setInterval(myTestFunc1, 100); // Set an interval to call myTestFunc1 every 100ms
  function myTestFunc1() {
    let className = "hl-btn inline-flex items-center px-4 py-2 border-2 border-curious-blue-400 text-sm font-medium rounded text-curious-blue-500 hover:bg-curious-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-curious-blue-500";
    let test1 = document.getElementsByClassName(className)[0]; // Get the first element with the specified class name
    if (test1) { // If test1 is not undefined or null
      test1.click(); // Click the element
      clearInterval(myInterval1); // Clear the interval
    }
  }
}

function myIntFunc2() { // Note to future jake: these could probably use better names, but I don't want to screw anything up
  const myInterval2 = setInterval(myTestFunc2, 100); // Set an interval to call myTestFunc2 every 100ms

  function myTestFunc2() {
    let className = "hl-text-input shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded disabled:opacity-50 text-gray-800";
    let test2 = document.getElementsByClassName(className)[3]; // Get the fourth element with the specified class name
    if (test2) { // If test2 is not undefined or null
      test2.value = "Add to Campaign / Workflow"; // Set the value of the element
      test2.dispatchEvent(new Event("input", { bubbles: true })); // Dispatch an input event on the element
      document.getElementsByClassName("py-1 text-nowrap")[0].style.display = "none"; // Hide the first element with class "py-1 text-nowrap"
      document.getElementsByClassName("form-row")[1].style.display = "none"; // Hide the second element with class "form-row"
      clearInterval(myInterval2); // Clear the interval
    }
  }
}

function AddSchoolFunc() {
  // Get the element with id "newspan1"
  let x = document.getElementById("newspan1");

  // If the element doesn't exist, execute the following block
  if (x === undefined || x === null) {
      // Hide elements with title "Pipeline Change" and "Send Review Requests"
      document.querySelector('[title="Pipeline Change"]').style.display = "none";
      document.querySelector('[title="Send Review Requests"]').style.display = "none";

      // Create new span element and set its attributes
      let span = document.createElement("span");
      span.setAttribute("id", "newspan1");
      span.setAttribute("data-v-07dca9cc", "");
      span.setAttribute("data-tooltip", "tooltip");
      span.setAttribute("data-placement", "top");
      span.setAttribute("data-original-title", "Add School Contact");

      // Insert the new span as the first child of the first element with class "bulk-actions-list"
      let list = document.getElementsByClassName("bulk-actions-list")[0];
      list.insertBefore(span, list.children[0]);

      // Create new button element, set its attributes, and append it to the new span
      let btn = document.createElement("button");
      btn.setAttribute("id", "newbtn1");
      btn.setAttribute("data-v-07dca9cc", "");
      btn.setAttribute("type", "button");
      btn.setAttribute("data-original-title", "Add School Contact");
      btn.setAttribute("class", "btn btn-light btn-sm");
      document.getElementById("newspan1").appendChild(btn);

      // Create new icon element, set its attributes, and append it to the new button
      let icon = document.createElement("i");
      icon.setAttribute("id", "newicon1");
      icon.setAttribute("data-v-07dca9cc", "");
      icon.setAttribute("class", "fas fa-school");
      document.getElementById("newbtn1").appendChild(icon);

      // Create new span elements, set their attributes, and append them to the appropriate parent elements
      let span2 = document.createElement("span");
      span2.setAttribute("id", "newspan2");
      span2.setAttribute("class", "tooltip");
      span2.setAttribute("style", "display:none; position:absolute; top:18.5%; left:2%");
      span.insertBefore(span2, span.children[0]);

      let span3 = document.createElement("span");
      span3.setAttribute("id", "newspan3");
      span3.setAttribute("class", "tooltip-inner");
      span3.innerText = "Add School Contact";
      document.getElementById("newspan2").appendChild(span3);

      // Add click event listener to the new button
      document.getElementById("newbtn1").addEventListener("click", myClick);
  }
}

function myClick() { // this could probably use a better name
  document.getElementsByClassName("add-school-contact")[0].click();
}

function myHover() {
  let x = document.getElementById("newspan2"); // Get the element with id "newspan2"
  x.style.display = x.style.display === "none" ? "inline" : "none"; // Toggle display between "none" and "inline"
}

function PasteBtnFunc() {
  let x = document.getElementById("pastespan1"); // Check if element with id "pastespan1" exists
  if (!x) { // If the element doesn't exist, execute the following block
    let span = document.createElement("span"); // Create new span element
    span.setAttribute("id", "pastespan1");
    span.setAttribute("data-v-07dca9cc", "");
    span.setAttribute("data-tooltip", "tooltip");
    span.setAttribute("data-placement", "top");
    span.setAttribute("data-original-title", "Paste School Settings");

    let list = document.getElementsByClassName("bulk-actions-list")[0]; // Get the first element with class "bulk-actions-list"
    list.insertBefore(span, list.children[1]); // Insert the new span as the second child of the list

    let btn = document.createElement("button"); // Create new button element
    btn.setAttribute("id", "pastebtn1");
    btn.setAttribute("data-v-07dca9cc", "");
    btn.setAttribute("type", "button");
    btn.setAttribute("data-original-title", "Paste School Settings");
    btn.setAttribute("class", "btn btn-light btn-sm");
    document.getElementById("pastespan1").appendChild(btn); // Append the new button to the new span

    let icon = document.createElement("i"); // Create new icon element
    icon.setAttribute("id", "pasteicon1");
    icon.setAttribute("data-v-07dca9cc", "");
    icon.setAttribute("class", "fas fa-paste");
    document.getElementById("pastebtn1").appendChild(icon); // Append the new icon to the new button

    let span2 = document.createElement("span"); // Create new span element
    span2.setAttribute("id", "pastespan2");
    span2.setAttribute("class", "tooltip");
    span2.setAttribute("style", "display:none; position:absolute; top:18.5%; left:5%");
    span.insertBefore(span2, span.children[0]); // Insert the new span as the first child of the first span

    let span3 = document.createElement("span"); // Create new span element
    span3.setAttribute("id", "pastespan3");
    span3.setAttribute("class", "tooltip-inner");
    span3.innerText = "Paste School Settings";
    document.getElementById("pastespan2").appendChild(span3); // Append the new span to the second span

    document.getElementById("pastebtn1").addEventListener("click", pasterFunc); // Add click event listener to the new button
    document.getElementById("pastespan1").addEventListener("mouseover", myHover2); // Add mouseover event listener to the first span
  }
}

function myHover2() {
  let x = document.getElementById("pastespan2"); // Get the element with id "pastespan2"
  x.style.display = x.style.display === "none" ? "inline" : "none"; // Toggle display between "none" and "inline"
}

function pasterFunc() {
  window.myPaster = setInterval(pasteFunc, 100);
}

function pasteFunc() {
  try {
    document.getElementsByClassName("btn btn-light btn-sm")[8].click(); // Click the 9th button with class "btn btn-light btn-sm"
    let x = document.getElementById("alertModal___BV_modal_outer_"); // Get the element with id "alertModal___BV_modal_outer_"
    if (!x) { // If x is undefined or null
      let y = document.getElementsByClassName("vfm vfm--inset vfm--fixed")[2]; // Get the 3rd element with class "vfm vfm--inset vfm--fixed"
      if (y) { // If y is not undefined or null
        y.style.display = "none"; // Hide y
        let inputElement = document.getElementsByClassName("py-1 outline-none border-0 focus:border-0 focus:ring-0 focus:outline-none sm:text-sm")[0]; // Get the first input element
        inputElement.value = "paste"; // Set the value of the input element to "paste"
        inputElement.dispatchEvent(new Event("input", { bubbles: true })); // Dispatch an input event
        let z = document.getElementsByClassName("group cursor-pointer text-gray-900 hover:text-white hover:bg-blue-600 select-none relative py-2 pl-3 pr-9")[0]; // Get the first element with class "group cursor-pointer text-gray-900 hover:text-white hover:bg-blue-600 select-none relative py-2 pl-3 pr-9"
        if (z) { // If z is not undefined or null
          z.click(); // Click z
          let textAreaElement = document.getElementsByClassName("appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm")[0]; // Get the first textarea element
          textAreaElement.value = "paste school settings"; // Set the value of the textarea element to "paste school settings"
          textAreaElement.dispatchEvent(new Event("input", { bubbles: true })); // Dispatch an input event
          window.myClicker = setInterval(clickFunc, 100); // Set an interval to call clickFunc every 100ms
          alert("Pasting School Settings..."); // Alert the user
          clearInterval(myPaster); // Clear the interval set by myPaster
        }
      }
    } else {
      clearInterval(myPaster); // Clear the interval set by myPaster
    }
  } catch (err) {
    clearInterval(myPaster); // Clear the interval set by myPaster
    console.log("Auto Add Tag - Paste Function Error: The process was stopped."); // Log the error
  }
}

function clickFunc() {
  try {
    // Get the first element with the specified class name and trigger a click event
    document.getElementsByClassName("inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")[0].click();
  } catch (err) {
    // Log error message in case of any exceptions
    console.log("Auto Add Tag - Paste Function - 'Add' Button Clicker");
  }
}

function clearclickFunc() { // I want to delete this. However, because it's not used anywhere in the code, I suspect it might be called from an inline HTML onclick.
  clearInterval(myClicker);
}

function CopyBtnFunc() {
  let x = document.getElementById("copyspan1"); // Check if element with id "copyspan1" exists
  if (!x) { // If the element doesn't exist, execute the following block
    let span = document.createElement("span"); // Create new span element
    span.setAttribute("id", "copyspan1");
    span.setAttribute("data-v-07dca9cc", "");
    span.setAttribute("data-tooltip", "tooltip");
    span.setAttribute("data-placement", "top");
    span.setAttribute("data-original-title", "Copy School Settings");
    let list = document.getElementsByClassName("bulk-actions-list")[0]; // Get the first element with class "bulk-actions-list"
    list.insertBefore(span, list.children[2]); // Insert the new span as the third child of the list
    let btn = document.createElement("button"); // Create new button element
    btn.setAttribute("id", "copybtn1");
    btn.setAttribute("data-v-07dca9cc", "");
    btn.setAttribute("type", "button");
    btn.setAttribute("data-original-title", "Copy School Settings");
    btn.setAttribute("class", "btn btn-light btn-sm");
    span.appendChild(btn); // Append the new button to the new span
    let icon = document.createElement("i"); // Create new icon element
    icon.setAttribute("id", "copyicon1");
    icon.setAttribute("data-v-07dca9cc", "");
    icon.setAttribute("class", "fas fa-copy");
    btn.appendChild(icon); // Append the new icon to the new button
    let span2 = document.createElement("span"); // Create new span element
    span2.setAttribute("id", "copyspan2");
    span2.setAttribute("class", "tooltip");
    span2.setAttribute("style", "display:none; position:absolute; top:18.5%; left:8%");
    span.insertBefore(span2, span.children[0]); // Insert the new span as the first child of the first span
    let span3 = document.createElement("span"); // Create new span element
    span3.setAttribute("id", "copyspan3");
    span3.setAttribute("class", "tooltip-inner");
    span3.innerText = "Copy School Settings";
    span2.appendChild(span3); // Append the new span to the second span
    btn.addEventListener("click", copierFunc); // Add click event listener to the new button
    span.addEventListener("mouseover", myHover3); // Add mouseover event listener to the first span
  }
}

function myHover3() {
  let x = document.getElementById("copyspan2"); // Get the element with id "copyspan2"
  x.style.display = x.style.display === "none" ? "inline" : "none"; // Toggle display style between "none" and "inline"
}

function copierFunc() {
  window.myCopier = setInterval(copyFunc, 100);
}

function copyFunc() {
  try {
    document.getElementsByClassName("btn btn-light btn-sm")[8].click(); // Click the 9th button with specified classes
    let x = document.getElementById("alertModal___BV_modal_outer_"); // Get the modal element
    if (x === undefined || x === null) {
      let y = document.getElementsByClassName("vfm vfm--inset vfm--fixed")[2]; // Get the 3rd element with specified classes
      if (!(y === undefined || y === null)) {
        y.style.display = "none"; // Hide the element
        let input = document.getElementsByClassName("py-1 outline-none border-0 focus:border-0 focus:ring-0 focus:outline-none sm:text-sm")[0];
        input.value = "copy"; // Set input value to 'copy'
        input.dispatchEvent(new Event("input", { bubbles: true })); // Dispatch input event
        let z = document.getElementsByClassName("group cursor-pointer text-gray-900 hover:text-white hover:bg-blue-600 select-none relative py-2 pl-3 pr-9")[0];
        if (!(z === undefined || z === null)) {
          z.click(); // Click the element
          let finalInput = document.getElementsByClassName("appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm")[0];
          finalInput.value = "copy school settings"; // Set input value to 'copy school settings'
          finalInput.dispatchEvent(new Event("input", { bubbles: true })); // Dispatch input event
          window.myClicker1 = setInterval(clickFunc1, 100); // Set interval for clickFunc1
          alert("Copying School Settings..."); // Alert the user
          clearInterval(myCopier); // Clear the interval
        }
      }
    } else {
      clearInterval(myCopier); // Clear the interval
    }
  } catch (err) {
    clearInterval(myCopier); // Clear the interval in case of error
    console.log("Auto Add Tag - Copy Function Error: The process was stopped."); // Log the error
  }
}


function clickFunc1() { // rename this, Jake
  try {
    // Get the first element with the specified class and trigger a click event
    document.getElementsByClassName("inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")[0].click();
  } catch (err) {
    // Log an error message in case of failure
    console.log("Auto Add Tag - Copy Function - 'Add' Button Clicker");
  }
}

function clearclickFunc1() { 
  clearInterval(myClicker1);
}

function SettingsFunc() {
  let url = window.location.href; // Get the current URL
  let page = url.split("settings")[1]; // Split the URL to get the page name
  if (page === "/phone_number?tab=trust-center") { // Check if the page is the trust center tab of the phone number settings
    ["ExampleUsecaseDescription", "ExampleSampleMessage1", "ExampleSampleMessage2", "ExampleUserConsent", "ExampleOptInMessage"].forEach(id => { // Iterate over an array of element IDs
      let element = document.getElementById(id); // Get the element with the current ID
      if (element) { // Check if the element exists
        element.addEventListener("click", handleSampleFunc);
      }
    });
  }
}

// Refactored all of the sampleFuncs into one function
function handleSampleFunc(event) {
  let targetId = event.target.id; // Get the ID of the clicked element
  let textElement = document.getElementsByClassName("text-gray-600 hl-text-sm-regular")[0]; // Get the text element
  let hiddenElement = document.getElementsByClassName("custom-hidden items-center justify-start group-hover:flex")[0]; // Get the hidden element
  let copyTextBlocks = document.querySelectorAll("#CopyTextBlock"); // Get an array of copy text blocks

  switch (targetId) { // Perform actions based on the clicked element ID
    case "ExampleUsecaseDescription":
      textElement.innerText = "This campaign will be used by our Jostens sales team to reach out to families who are ordering High School supplies for their students, including caps & gowns, class rings, letterman jackets, and more."; hiddenElement.style.display = "none"; copyTextBlocks[1].style.display = "none"; copyTextBlocks[2].style.display = "none"; break;
    case "ExampleSampleMessage1":
      textElement.innerText = "Hi John! This is YOUR_NAME from Jostens. It's time to order graduation products for your Senior! Please take a moment and click the link below to watch a few short videos to learn about the ordering process! Click here: jostens.co/freestate. Reply STOP to unsubscribe."; hiddenElement.style.display = "none"; copyTextBlocks[1].style.display = "none"; break;
    case "ExampleSampleMessage2":
      textElement.innerText = "Hi Jane! This is YOUR_NAME from Jostens. It's time to start thinking about class rings for your Student! Please be watching your texts and email for more info in the days to come. Text or call me anytime with questions at YOUR_PHONE. Reply STOP to unsubscribe."; hiddenElement.style.display = "none"; copyTextBlocks[1].style.display = "none"; break;
    case "ExampleUserConsent":
      textElement.innerText = "End users opt-in through a form on our website (jostens.co/contact-form) or by personally providing us with their contact details after reviewing the consent language on our website. New contacts agree to receive order notifications & promotional messages from us when providing their contact details online, in-person, or otherwise. Additionally end users can also text START to YOUR_PHONE."; hiddenElement.style.display = "none"; break;
    case "ExampleOptInMessage":
      textElement.innerText = "You have successfully opted-in to receive notification and promotional SMS from Jostens. Please reply STOP if you need to Opt-out in the future."; hiddenElement.style.display = "none"; break;
  }
}
