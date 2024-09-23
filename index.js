const container = document.querySelector(".container");
const array = document.querySelector(".array");
const button = document.querySelector(".button");
const input = document.querySelector(".input");
const carDisplay = document.querySelector(".companylist")

let cars = ["Ferrari", "Mercedez Benz", "Bugatti", "Toyota", "Volks Wagen"];
let carImages = [
    {
        id: 1,
        imageUrl: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg'
    },
    {
        id: 2,
        imageUrl: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 3,
        imageUrl: 'https://images.pexels.com/photos/10017333/pexels-photo-10017333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 4,
        imageUrl: 'https://images.pexels.com/photos/2036544/pexels-photo-2036544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 5,
        imageUrl: 'https://images.pexels.com/photos/7877442/pexels-photo-7877442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
]

const newPara = document.createElement("ul");
array.appendChild(newPara); 

cars.map((car) => {
  const newDiv = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const newList = document.createElement("li");

  // Set up the list item and delete button
  newList.textContent = car;
  deleteBtn.textContent = "Delete";

  // Add class to the div
  newDiv.classList.add('newd');
  deleteBtn.classList.add("btn")

  // Append the list item and delete button to the div
  newDiv.appendChild(newList);
  newDiv.appendChild(deleteBtn);

  // Append the div to the <ul>
  newPara.appendChild(newDiv);

  // Add delete functionality to the button
  deleteBtn.addEventListener("click", () => {
    newPara.removeChild(newDiv);
  });

  console.log(newPara);
});

button.addEventListener("click", (e) => {
  let inputValue = input.value;
  
  if (inputValue) {
    cars.push(inputValue);

    // Create a new <div> for the new car
    const newDiv = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const newListItem = document.createElement("li");

    // Set up the new list item and delete button
    newListItem.textContent = inputValue;
    deleteBtn.textContent = "Delete";

    // Add class to the new div
    newDiv.classList.add('newd');
    deleteBtn.classList.add("btn")

    newDiv.appendChild(newListItem);
    newDiv.appendChild(deleteBtn);

    newPara.appendChild(newDiv);

    // Add delete functionality to the button
    deleteBtn.addEventListener("click", () => {
      newPara.removeChild(newDiv);
    });

    // Clear the input field after adding the car
    input.value = '';
  } else {
    console.log('Input is empty!');
  }
});

const img_contain = document.createElement("div")
img_contain.classList.add("img");

carImages.forEach(carImage => {
    const img = document.createElement("img");
    img_contain.appendChild(img)
    carDisplay.appendChild(img_contain);

    

    img.src = carImage.imageUrl;
    img.alt = `Image of ${cars[carImage.id - 1]}`;
    img.style.width = "25%"; 
    img.style.height = "300px"
    img.style.margin = "10px";
})
