// Part 1
let inputText1 = document.querySelector("#textAlerter");
let alerterSubmit = document.querySelector("#alertSubmit");
let formAlert = document.querySelector("#theAlerter");

formAlert.addEventListener("submit",function(event){
    event.preventDefault();
    alert(inputText1.value);
    inputText1.value = "";

})

// Part 2 
let ingredientsSelected = [];
let sandwichForm = document.querySelector("#sandwichBuilder");
let sandwichSubmit = document.querySelector("sandwichSubmit");
 //--ingredients
let chickenCheckBox = document.querySelector("#chicken");
let baconCheckBox = document.querySelector("#bacon");
let turkeyCheckBox = document.querySelector("#turkey");
let hamCheckBox = document.querySelector("#ham");
let pepperoniCheckBox = document.querySelector("#pepperoni");
let lettuceCheckBox = document.querySelector("#lettuce");
let tomatoCheckBox = document.querySelector("#tomato");
let onionsCheckBox = document.querySelector("#onions");
let peppersCheckBox = document.querySelector("#peppers");
let olivesCheckBox = document.querySelector("#olives");

let hungry = document.querySelector("#fatazz");
sandwichForm.addEventListener("submit",function(event){
    event.preventDefault();

    if(hungry.checked === true){
        chickenCheckBox.checked=true;
        baconCheckBox.checked=true;
        hamCheckBox.checked=true;
        pepperoniCheckBox.checked=true;
        turkeyCheckBox.checked=true;
        lettuceCheckBox.checked=true;
        tomatoCheckBox.checked=true;
        onionsCheckBox.checked=true;
        peppersCheckBox.checked=true;
        olivesCheckBox.checked=true;
    }
    
    
    if(chickenCheckBox.checked===true){
        ingredientsSelected.push("Chicken");
    }
    if(baconCheckBox.checked===true){
        ingredientsSelected.push("Bacon");
    }
    if(hamCheckBox.checked===true){
        ingredientsSelected.push("Ham");
    }
    if(pepperoniCheckBox.checked===true){
        ingredientsSelected.push("Pepperoni");
    }
    if(turkeyCheckBox.checked===true){
        ingredientsSelected.push("Turkey");
    }
    if(lettuceCheckBox.checked===true){
        ingredientsSelected.push("Lettuce");
    }
    if(tomatoCheckBox.checked===true){
        ingredientsSelected.push("Tomato");
    }
    if(onionsCheckBox.checked===true){
        ingredientsSelected.push("Onions");
    }
    if(peppersCheckBox.checked===true){
        ingredientsSelected.push("Peppers");
    }
    if(olivesCheckBox.checked===true){
        ingredientsSelected.push("Olives");
    } 
    
    if(ingredientsSelected.length!=0){
    alert(`Your sandwich contains: ${ingredientsSelected}.`);
    } else {
        alert("Select your ingredients.");
    }
    
    chickenCheckBox.checked = false;
    baconCheckBox.checked = false;
    turkeyCheckBox.checked = false;
    hamCheckBox.checked = false;
    pepperoniCheckBox.checked = false;
    lettuceCheckBox.checked = false;
    tomatoCheckBox.checked = false;
    onionsCheckBox.checked = false;
    peppersCheckBox.checked = false;
    olivesCheckBox.checked = false;
    hungry.checked = false;

    while(ingredientsSelected.length!=0){
        ingredientsSelected.pop();
    }

})

// Part 3
let date = document.querySelector("#date");
let stylistName = document.querySelector("#name");
let hairSubmit = document.querySelector("#appSubmit");
let shortHair = document.querySelector("#short");
let longHair = document.querySelector("#long");
let hair = [];

let hairForm = document.querySelector("#appScheduler");

hairForm.addEventListener("submit", function(event){
    event.preventDefault();
    if(shortHair.checked === true){
        hair.push("short");
    } else {
        hair.push("long");
    }
    
    alert(`Haircut scheduled for ${date.value} with ${stylistName.value} for ${hair} hair.` );

    date.value = "";
    stylistName.value = "";
    shortHair.checked = false;
    longHair.checked = false;
    while(hair.length!=0){
        hair.pop();
    };

    
    
});

// Part 4
let accountForm = document.querySelector("#createAccount");
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let accountSubmit = document.querySelector("#accountSubmit");


accountForm.addEventListener("submit",function(event){
    event.preventDefault();
    alert(`Account Created.Your Username: ${userName.value}.Your Email: ${userEmail.value}`)

    userName.value = "";
    userEmail.value = "";

})
